<?php
/**
 * Plugin Name: Heart of Harmony CF7 Lead Capture
 * Description: Sends Contact Form 7 submissions to the lead capture endpoint.
 * Version: 1.0.0
 */

// The Vercel website uses src/app/api/enquiry/route.ts instead.

if (!defined('ABSPATH')) {
    exit;
}

add_action('wpcf7_mail_sent', 'hoh_forward_cf7_lead', 10, 1);

function hoh_forward_cf7_lead($contact_form): void
{
    if (!class_exists('WPCF7_Submission')) {
        return;
    }

    $submission = WPCF7_Submission::get_instance();
    if (!$submission) {
        error_log('Heart of Harmony lead capture: CF7 submission not found');
        return;
    }

    $posted = $submission->get_posted_data();
    $referer = isset($_SERVER['HTTP_REFERER']) ? esc_url_raw(wp_unslash($_SERVER['HTTP_REFERER'])) : '';
    $referer_utms = [];
    $query = $referer ? wp_parse_url($referer, PHP_URL_QUERY) : null;
    if (is_string($query)) {
        parse_str($query, $referer_utms);
    }

    $field = static function (array $keys, string $default = '') use ($posted, $referer_utms): string {
        foreach ($keys as $key) {
            $value = $posted[$key] ?? $referer_utms[$key] ?? null;
            if ($value === null || $value === '') {
                continue;
            }
            if (is_array($value)) {
                $value = implode(', ', array_filter($value, 'is_scalar'));
            }
            return is_scalar($value) ? sanitize_text_field(wp_unslash((string) $value)) : $default;
        }
        return $default;
    };

    $payload = [
        'name'           => $field(['your-name']),
        'email'          => sanitize_email($field(['your-email'])),
        'phone'          => $field(['your-phone']),
        'message'        => sanitize_textarea_field($field(['your-message', 'message'], 'Interested')),
        'utm_source'     => $field(['utm_source'], 'Website'),
        'utm_medium'     => $field(['utm_medium'], 'Website'),
        'utm_campaign'   => $field(['utm_campaign']),
        'utm_content'    => $field(['utm_content']),
        'utm_id'         => $field(['utm_id', 'utm_term']),
        'specifications' => $field(['specifications']),
        'purpose'        => $field(['select-833', 'purpose']),
    ];

    if ($payload['name'] === '' || $payload['email'] === '' || $payload['phone'] === '') {
        error_log('Heart of Harmony lead capture: required form fields missing');
        return;
    }

    $response = wp_remote_post('https://jjcruzad.a2hosted.com/lead-catpure/test.php', [
        'timeout' => 30,
        'headers' => ['Content-Type' => 'application/x-www-form-urlencoded'],
        'body' => $payload,
    ]);

    if (is_wp_error($response)) {
        error_log('Heart of Harmony lead capture: ' . $response->get_error_message());
        return;
    }

    $code = wp_remote_retrieve_response_code($response);
    $body = wp_remote_retrieve_body($response);
    $result = json_decode($body, true);
    if ($code < 200 || $code >= 300 || !is_array($result) ||
        ($result['status'] ?? false) !== true ||
        ($result['data']['salesforce_apex'] ?? false) !== true) {
        error_log('Heart of Harmony lead capture: HTTP ' . $code . ' ' . $body);
        return;
    }

    error_log('Heart of Harmony lead capture: submitted successfully (HTTP ' . $code . ')');
}
