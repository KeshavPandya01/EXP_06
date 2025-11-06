const express = require("express");
const app = express();

const server = app.listen(3002, () => {
  console.log("User Service is listening on port 3002");
});

app.get("/", (req, res) => {
  res.send("User Service is running");
});

// ✅ Add this small fix:
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());

module.exports = app;
