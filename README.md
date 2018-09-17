# Hapi 17 Apollo upload bug

The following repository contains a simple weebpage that fakes an upload query
to the most basic Apollo server mounted on top of Hapi 17.

Followings the specs this should work but it fails with the following error:

```json
{
  "statusCode": 400,
  "error": "Bad Request",
  "message": "Must provide query string."
}
```

To see the bug in action, run the following commands:

```bash
npm install
npm start
open index.html
```

This should open a webpage that display a simple form asking for a file to upload. This file is automatically mapped to the graphql query within the hidden inputs following the sepcs. When pressing submit buttons it then uploads the file with multipart as expected but server responds with error.
