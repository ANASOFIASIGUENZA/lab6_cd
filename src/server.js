const express = require("express");
const { getMessage, getStatus, getVersion } = require("./App");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: getMessage(),
    status: getStatus(),
    version: getVersion(),
  });
});

app.get("/health", (req, res) => {
  res.json({ status: getStatus() });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;