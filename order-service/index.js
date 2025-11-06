const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Order Service is running");
});

const server = app.listen(3001, () => {
  console.log("Order Service is listening on port 3001");
});

// ✅ Gracefully close the server on shutdown (prevents Jest/Jenkins hang)
process.on("SIGTERM", () => server.close());
process.on("SIGINT", () => server.close());

module.exports = app;
