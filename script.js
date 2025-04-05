require("dotenv").config();

// First function
function pingAPI() {
  console.log("✅ API Ping Successful:", response.status);
}

// Second function
function logTimestamp() {
  console.log("🕒 Timestamp:", new Date().toISOString());
}

// Run both functions
(() => {
  pingAPI();
  logTimestamp();
})();
