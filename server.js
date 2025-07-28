const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 8080;

// Static files from "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`1BDY Website running on http://localhost:${port}`);
});
