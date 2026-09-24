<?php

error_reporting(E_ALL);
ini_set('display_errors', '0');
date_default_timezone_set('Asia/Kolkata');

header('Content-Type: application/json; charset=UTF-8');

/*
|--------------------------------------------------------------------------
| Read JSON Request
|--------------------------------------------------------------------------
*/
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    http_response_code(405);
    echo json_encode(['status' => false, 'message' => 'Method not allowed']);
    exit;
}
$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (is_array($data)) {
    $_POST = array_merge($_POST, $data);
}

if (!is_array($data) || array_is_list($data)) {
    http_response_code(400);
    echo json_encode(['status' => false, 'message' => 'A JSON object is required']);
    exit;
}
foreach ($_POST as $value) {
    if (!is_string($value)) {
        http_response_code(422);
        echo json_encode(['status' => false, 'message' => 'Form values must be text']);
        exit;
    }
}

/*
|--------------------------------------------------------------------------
| Validate Request
|--------------------------------------------------------------------------
*/

if (empty($_POST)) {
    http_response_code(400);

    echo json_encode([
        'status'  => false,
        'message' => 'No POST data received'
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| Get Form Values
|--------------------------------------------------------------------------
*/
$name = trim(
    $_POST['your-name']
    ?? $_POST['name']
    ?? ''
);

$email = trim(
    $_POST['your-email']
    ?? $_POST['email']
    ?? ''
);

$phone = trim(
    $_POST['your-phone']
    ?? $_POST['phone']
    ?? $_POST['mobile']
    ?? $_POST['tel']
    ?? ''
);

$query = trim(
    $_POST['message']
    ?? $_POST['your-message']
    ?? 'Interested'
);

$project = 'Heart Of Harmony';
// Preserve selections without enabling the custom fields commented out in the supplied code.
foreach (['specifications' => 'Specifications', 'purpose' => 'Purpose of Purchase'] as $key => $label) {
    if (!empty($_POST[$key])) {
        $query .= "\n" . $label . ': ' . $_POST[$key];
    }
}
if (!empty($_POST['utm_content'])) {
    $query .= "\nUTM Content: " . $_POST['utm_content'];
}

/*
|--------------------------------------------------------------------------
| UTM Values
|--------------------------------------------------------------------------
*/
$utm_source = trim(
    $_POST['utm_source']
    ?? ''
);

$utm_medium = trim(
    $_POST['utm_medium']
    ?? ''
);

$utm_campaign = trim(
    $_POST['utm_campaign']
    ?? ''
);

$utm_content = trim(
    $_POST['utm_content']
    ?? ''
);

$utm_term = trim(
    $_POST['utm_term']
    ?? ''
);

$ad_name = trim(
    $_POST['ad_name']
    ?? $_POST['Ad Name']
    ?? ''
);

$adset_name = trim(
    $_POST['adset_name']
    ?? $_POST['ad_set_name']
    ?? $_POST['Ad Set Name']
    ?? ''
);

$gclid = trim(
    $_POST['gclid']
    ?? $_POST['Google click ID']
    ?? ''
);

$campaign_id = trim(
    $_POST['campaign_id']
    ?? $_POST['utm_id']
    ?? $_POST['Campaign Id']
    ?? $_POST['Campaing Id']
    ?? ''
);

$specifications = trim(
    $_POST['specifications']
    ?? $_POST['configuration']
    ?? ''
);

$purpose = trim(
    $_POST['purpose']
    ?? ''
);

/*
|--------------------------------------------------------------------------
| Basic Validation
|--------------------------------------------------------------------------
*/
if ($name === '' || $phone === '') {
    http_response_code(422);

    echo json_encode([
        'status'  => false,
        'message' => 'Name and phone are required'
    ]);

    exit;
}

$nameParts = preg_split('/\s+/', trim($name), 2);

$firstName = $nameParts[0] ?? '';
$lastName  = $nameParts[1] ?? '';

if ($lastName === '') {
    $lastName = $firstName !== '' ? $firstName : 'Website Lead';
}

/*
|--------------------------------------------------------------------------
| Status Tracking
|--------------------------------------------------------------------------
*/

$apexLeadSuccess    = false;

$tokenResponse      = null;
$leadResponse       = null;

try {

    // Salesforce OAuth client credentials, kept outside the web root.
    // Local environment file stays outside the PHP document root and out of Git.
    // Hosting-provided environment variables take precedence over this file.
    $envFile = __DIR__ . '/../.env';
    $config = is_file($envFile)
        ? parse_ini_file($envFile, false, INI_SCANNER_RAW) : [];
    if ($config === false) {
        throw new Exception('Unable to read Salesforce environment configuration.');
    }
    $tokenUrl =
        'https://ckpc.my.salesforce.com/services/oauth2/token';

    $tokenFields = [
        'grant_type'    => 'client_credentials',
        'client_id'     => getenv('SALESFORCE_CLIENT_ID') ?: ($config['SALESFORCE_CLIENT_ID'] ?? ''),
        'client_secret' => getenv('SALESFORCE_CLIENT_SECRET') ?: ($config['SALESFORCE_CLIENT_SECRET'] ?? '')
    ];

    if (!$tokenFields['client_id'] || !$tokenFields['client_secret']) {
        throw new Exception('Salesforce credentials are not configured.');
    }

    $tokenCurl = curl_init();

    curl_setopt_array($tokenCurl, [
        CURLOPT_URL            => $tokenUrl,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query($tokenFields),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_TIMEOUT        => 30,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/x-www-form-urlencoded',
            'Accept: application/json'
        ]
    ]);

    $tokenResponse = curl_exec($tokenCurl);
    $tokenHttpCode = curl_getinfo(
        $tokenCurl,
        CURLINFO_HTTP_CODE
    );
    $tokenCurlError = curl_error($tokenCurl);
    $tokenCurlErrorNumber = curl_errno($tokenCurl);

    curl_close($tokenCurl);

    $tokenData = json_decode(is_string($tokenResponse) ? $tokenResponse : '', true);


    if ($tokenCurlErrorNumber !== 0) {
        throw new Exception(
            'Salesforce Token Error: ' . $tokenCurlError
        );
    }

    if (
        $tokenHttpCode < 200
        || $tokenHttpCode >= 300
        || empty($tokenData['access_token'])
    ) {
        $tokenError =
            $tokenData['error_description']
            ?? $tokenData['error']
            ?? 'Unable to generate Salesforce access token.';

        throw new Exception(
            'Salesforce token error: ' . $tokenError
        );
    }

    $accessToken = $tokenData['access_token'];

    $instanceUrl = rtrim(
        $tokenData['instance_url']
        ?? 'https://ckpc.my.salesforce.com',
        '/'
    );

    /*
    |--------------------------------------------------------------------------
    | 3. Salesforce Apex REST Lead
    |--------------------------------------------------------------------------
    */

    $leadUrl =
        $instanceUrl .
        '/services/apexrest/CreateLeadService';

    $salesforcePayload = [
        'FirstName'   => $firstName,
        'LastName'    => $lastName,
        'MobilePhone' => $phone,
        'Email'       => $email,
        'Company'     => 'Website Lead',
        'Status'      => 'Yet To Service',

        'Customer_Remarks__c' => $query,
        'Submitted_By__c'     => 'Website Form',
        'Lead_Source__c'  => 'Marketing Online',
        'Sub_Source__c'  => $utm_medium,

        // Google / Ads tracking -> Salesforce Lead fields
        'source__c'      => $utm_source,
        'Channel__c'     => $utm_medium,
        'campaigns__c'   => $utm_campaign,
        'keyword__c'     => $utm_term,
        'ad_name__c'     => $ad_name,
        'adset_name__c'  => $adset_name,
        'gclid__c'       => $gclid,
        'Campaign_Id__c' => $campaign_id,

        /*
        'Configuration__c' => $specifications,
        'Stage__c'         => $purpose,
        */

        'Project__r' => [
            'Name' => $project
        ]
    ];

    $leadCurl = curl_init();

    curl_setopt_array($leadCurl, [
        CURLOPT_URL            => $leadUrl,
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode(
            $salesforcePayload,
            JSON_UNESCAPED_SLASHES
            | JSON_UNESCAPED_UNICODE
        ),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_TIMEOUT        => 30,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: Bearer ' . $accessToken
        ]
    ]);

    $leadResponse = curl_exec($leadCurl);
    $leadHttpCode = curl_getinfo(
        $leadCurl,
        CURLINFO_HTTP_CODE
    );
    $leadCurlError = curl_error($leadCurl);
    $leadCurlErrorNumber = curl_errno($leadCurl);

    curl_close($leadCurl);


    if ($leadCurlErrorNumber !== 0) {
        throw new Exception(
            'Salesforce Lead Error: ' . $leadCurlError
        );
    }

    if ($leadHttpCode < 200 || $leadHttpCode >= 300) {
        throw new Exception(
            'Salesforce Apex lead failed with HTTP code ' .
            $leadHttpCode
        );
    }

    $leadData = json_decode($leadResponse, true);
    if (is_string($leadData)) {
        $leadData = json_decode($leadData, true);
    }
    if (is_array($leadData) && (
        ($leadData['success'] ?? null) === false
        || ($leadData['status'] ?? null) === false
        || !empty($leadData['error'])
        || !empty($leadData['errors'])
    )) {
        throw new Exception('Salesforce rejected the lead.');
    }
    $apexLeadSuccess = true;

    /*
    |--------------------------------------------------------------------------
    | Final Success Response
    |--------------------------------------------------------------------------
    */

    echo json_encode([
        'status'  => true,
        'message' => 'Lead submitted successfully.',
        'data'    => [
            'salesforce_apex'         => $apexLeadSuccess
        ]
    ]);

    exit;

} catch (Throwable $e) {
    error_log('Enquiry submission failed: ' . $e->getMessage());


    http_response_code(500);

    echo json_encode([
        'status'  => false,
        'message' => 'Unable to submit your enquiry. Please try again or call us directly.',
        'data'    => [
            'salesforce_apex'        => $apexLeadSuccess
        ]
    ]);

    exit;
}