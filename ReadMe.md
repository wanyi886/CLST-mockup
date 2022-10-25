Changes:
1. Unminified main.74e80ec6.chunk.js/ 2.b843c547.chunk, and make a copy for original file for each.
2. Added login and logout function
3. Added backend api


Newly created files:

1. login.js
2. logout.js
3. logged-in-page.html
4. index.js
5. app.js
6. all.css
7. Dockerfile

package.json copy:
{
  "name": "clst-app",
  "version": "0.0.0",
  "private": true,
  "scripts": {
  "start": "node ./bin/www"
  },
  "dependencies": {
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "ejs": "^3.1.8",
    "express": "~4.16.1",
    "express-async-handler": "^1.2.0",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1",
    "node-sessionstorage": "^1.0.0"
  }
}