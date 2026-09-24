# Enquiry form backend

All forms post to `/api/enquiry`, which forwards to the supplied PHP Salesforce OAuth / CreateLeadService integration. Google Sheets and its Composer dependency have been removed. Success is shown only after the backend confirms submission; failures keep the form available to retry.

## Local development

Run `npm run dev` to start both Next.js and the PHP service. The launcher reuses an already-running local PHP enquiry service and skips starting local PHP when `ENQUIRY_PHP_URL` is configured. `npm run dev:php` is also available for starting PHP separately. PHP requires the cURL extension. Development defaults to `http://127.0.0.1:8081/enquiry.php`.

Salesforce credentials are stored in the ignored `server/php/.env`, outside the PHP document root. On a fresh checkout, copy `server/php/.env.example` to `server/php/.env` and fill in the values locally. Only the placeholder example belongs in Git. Never use `NEXT_PUBLIC_` for credentials or put the environment file in either public directory. PHP environment variables `SALESFORCE_CLIENT_ID` and `SALESFORCE_CLIENT_SECRET` override the local environment file.

## Deployment

Serve `server/php/public` with a PHP-capable web server and configure the PHP credentials through environment variables or the private `server/php/.env` file. Set `ENQUIRY_PHP_URL` on the Next.js server to the deployed endpoint, for example `https://your-php-host.example/enquiry.php`, and restart Next.js. A Next.js-only host does not execute PHP. For a shared host, the PHP service can listen on an internal address. Allow at least 65 seconds for the Next.js request (OAuth and lead requests each have a 30-second timeout).

The existing Salesforce field mapping is preserved. Specifications, purpose and UTM content are included in customer remarks because their custom Salesforce field mappings were absent or commented out in the supplied code. Other ad/UTM values are collected from the current page query string. No access tokens or lead payloads are written to public debug files.
