const { execSync } = require("child_process");

// Full path to debug.keystore
const keystorePath = "C:\\Users\\mohammad.faazil\\.android\\debug.keystore";

// Full path to keytool
const keytoolPath = "C:\\Program Files\\Java\\jdk-17\\bin\\keytool.exe";

// Command to list certificate details including SHA-1
const cmd = `"${keytoolPath}" -list -v -keystore "${keystorePath}" -storepass android -alias androiddebugkey`;

try {
  const output = execSync(cmd, { encoding: "utf-8" });
  console.log(output); // This prints SHA-1, SHA-256, and certificate info
} catch (err) {
  console.error("Error running keytool:", err.message);
}
