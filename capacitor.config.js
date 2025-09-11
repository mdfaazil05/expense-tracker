/** @type {import('@capacitor/cli').CapacitorConfig} */
const config = {
  appId: "com.example.expensetrack",
  appName: "expense-tracker",
  webDir: "dist",
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      webClientId:
        "572156481909-dsp57ms7k5o5h6r0e7gpcdh0ndqkqhqe.apps.googleusercontent.com",
      androidClientId:
        "572156481909-iku037ct03s0olj56upr5hi761447asj.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

module.exports = config;
