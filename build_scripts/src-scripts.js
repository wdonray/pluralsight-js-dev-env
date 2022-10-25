import express from "express";
import { join } from "path";
import open from "open";

const port = 3000;

const app = express();

// Any reference to the root will respond with sending the html file
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../src/index.html"));
});

// If there are no errors will will open up a connection
app.listen(port, (err) => {
  if (!err) {
    open("http://localhost:" + port);
    return;
  }

  console.log(err);
});
