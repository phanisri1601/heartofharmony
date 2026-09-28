# Enquiry backend

All website forms send JSON to the Next.js `/api/enquiry` route. The route validates the form and forwards the lead to `https://jjcruzad.a2hosted.com/lead-catpure/test.php` as an `application/x-www-form-urlencoded` POST. Organic visits use `Website` for Source, Sub Source and Channel. Campaign visits preserve `utm_source` and `utm_medium`. Lead Source is always `Marketing Online`.

The sender includes both tracking names (`utm_source`, `utm_medium`) and Salesforce aliases (`source__c`, `Sub_Source__c`, `Channel__c`, `Lead_Source__c`). The hosted PHP receiver must map these values into the Apex payload as follows:

```php
'source__c'      => $_POST['utm_source'] ?? $_POST['source__c'] ?? 'Website',
'Sub_Source__c'  => $_POST['utm_medium'] ?? $_POST['Sub_Source__c'] ?? 'Website',
'Channel__c'     => $_POST['utm_medium'] ?? $_POST['Channel__c'] ?? 'Website',
'Lead_Source__c' => 'Marketing Online',
```

The route no longer calls Salesforce directly. The hosted PHP endpoint must create the Salesforce lead. The Vercel project does not execute local PHP files, so the new Contact Form 7 integration in `server/php/cf7-lead-capture.php` is only for a separate WordPress site. Install it there as a plugin if that WordPress form still needs to send leads to the same endpoint. Do not install it for the Vercel website.

## Logs

Local development writes `logs/enquiry-submissions.jsonl`. Each request has a `submissionId` connecting the received form, forwarded payload, PHP response and final result. The file is ignored by Git because it contains lead details. On Vercel, use the project function logs and search for `Enquiry debug log`; the `/tmp` file is temporary and does not sync to your computer.

## Deployment

Deploy the updated Next.js project to Vercel, then submit a test enquiry. The old `SALESFORCE_CLIENT_ID` and `SALESFORCE_CLIENT_SECRET` variables are no longer used by this website route. The form only reports success when the PHP endpoint returns HTTP 2xx with JSON `status: true` and `data.salesforce_apex: true`; other replies return 502. A live synthetic test on 25 September 2026 returned both `salesforce_apex: true` and `google_sheet: true`, so the hosted PHP endpoint still writes to Google Sheets.
