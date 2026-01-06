module.exports = {
  apps : [{
    name: "store-api",
    script: "./index.js",
    // interpreter: "ts-node",
    env: {
      NODE_ENV: "development",
      PORT: 5000
    }
  }]
}