const config = {
    app: {
        port: 3000,
        host: "localhost",
        hostProduction: "0.0.0.0",
        mqttHostProduction: "0.0.0.0",
        bruteForce: {
            maximumLoginAttempts: 4
        }
    },
}

module.exports = config