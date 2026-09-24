# Enquiry backend on Vercel

All forms post to the Next.js `/api/enquiry` route. It obtains a Salesforce OAuth token and calls CreateLeadService directly using the field mapping from the supplied PHP code. No PHP service, Google Sheets integration or ENQUIRY_PHP_URL is required.

## Local setup

Copy `.env.example` to `.env.local` in the Next.js project root and fill in SALESFORCE_CLIENT_ID and SALESFORCE_CLIENT_SECRET. Run `npm run dev`. Keep `.env.local` ignored by Git and never use NEXT_PUBLIC_ for secrets.

## Vercel setup

1. Deploy the updated Next.js project (the old PHP-proxy route will not use these credentials).
2. Set SALESFORCE_CLIENT_ID and SALESFORCE_CLIENT_SECRET in Vercel's project environment variables. Paste raw values without surrounding quotes.
3. Select Production for production deployments; also select Preview if testing a preview deployment.
4. Redeploy after adding or changing variables, then test the new deployment URL.

Missing credentials return 503. Salesforce or network failures return 502; server logs show the OAuth/create-lead stage and HTTP status without credentials or form details. Success returns {"ok":true}. Requests time out after 25 seconds per Salesforce call, within the route's 60-second duration.

Specifications, purpose and UTM content are preserved in customer remarks. Other campaign fields retain the supplied mapping; Salesforce can reject values that violate its field rules.

The old server/php handler is retained only as a reference/optional standalone integration. It is not used by Next.js or Vercel. Its private environment file must remain ignored as well.

If a secret was committed previously, removing the local file does not remove it from earlier commits. Clean the affected unpushed history before pushing; do not bypass secret scanning.
