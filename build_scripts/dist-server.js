import compression from 'compression';
import express from 'express';
import { join } from 'path';
import open from 'open';

// Development Webserver for production build testing
// NOT actual production use, useful for hosting the minified production build for local debugging
// Serve actual production build through some host

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

// Any reference to the root will respond with sending the html file
app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, '../dist/index.html'));
});

app.get('/users', (_req, res) => {
  // Mock HTTP Call for user data
  res.json([
    { 'id': 1, 'name': 'Don' },
    { 'id': 2, 'name': 'Chay' },
    { 'id': 3, 'name': 'Dev' }
  ]);
});

// If there are no errors will will open up a connection
app.listen(port, (err) => {
  if (!err) {
    open('http://localhost:' + port);
    return;
  }

  console.log(err);
});
