// app.js
const config = require('./config');

console.log("Telnyx integration test running");

if (config.apiKey) {
  console.log("API Key loaded successfully");
} else {
  console.log("No API Key found");
}
