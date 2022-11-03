import config from '../webpack.config.dev';
import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

// Tell express to use my webpack configuration
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

// Any reference to the root will respond with sending the html file
app.get('/', (_req, res) => {
  res.sendFile(join(__dirname, '../src/index.html'));
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
