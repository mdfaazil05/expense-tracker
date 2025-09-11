/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: "com.example.expensetrack",
  appName: "expense-tracker",
  webDir: "dist",
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

module.exports = config;
