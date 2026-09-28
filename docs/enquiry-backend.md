# Enquiry backend

All website forms send JSON to the Next.js `/api/enquiry` route. The route validates the form and forwards these fields as an `application/x-www-form-urlencoded` POST to `https://jjcruzad.a2hosted.com/lead-catpure/test.php`: `name`, `email`, `phone`, `message`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_id`, `specifications`, and `purpose`.

The route no longer calls Salesforce directly. The hosted PHP endpoint must create the Salesforce lead. The Vercel project does not execute local PHP files, so the new Contact Form 7 integration in `server/php/cf7-lead-capture.php` is only for a separate WordPress site. Install it there as a plugin if that WordPress form still needs to send leads to the same endpoint. Do not install it for the Vercel website.

## Logs

Local development writes `logs/enquiry-submissions.jsonl`. Each request has a `submissionId` connecting the received form, forwarded payload, PHP response and final result. The file is ignored by Git because it contains lead details. On Vercel, use the project function logs and search for `Enquiry debug log`; the `/tmp` file is temporary and does not sync to your computer.

## Deployment

Deploy the updated Next.js project to Vercel, then submit a test enquiry. The old `SALESFORCE_CLIENT_ID` and `SALESFORCE_CLIENT_SECRET` variables are no longer used by this website route. The form only reports success when the PHP endpoint returns HTTP 2xx with JSON `status: true` and `data.salesforce_apex: true`; other replies return 502. A live synthetic test on 25 September 2026 returned both `salesforce_apex: true` and `google_sheet: true`, so the hosted PHP endpoint still writes to Google Sheets.
