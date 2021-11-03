// server-express.js
const express = require("express");
const app = express(); // initialize app
const port = 3000;

// GET callback function returns a response message
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to Node.js");
});

app.listen(port, (err) => {
  if (err) {
    return console.log("Error-404 You didnt spin server correctly", err);
  }

  console.log(`Server listening at http://localhost:${port}`);
});
