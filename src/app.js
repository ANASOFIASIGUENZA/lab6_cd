// Pipeline CD - Lab06

function getMessage() {
  return "Mensaje diferente que rompe la prueba";
}

function getStatus() {
  return "OK";
}

function getVersion() {
  return "1.0.0";
}

module.exports = { getMessage, getStatus, getVersion };