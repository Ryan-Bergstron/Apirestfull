const mongoose = require("mongoose");

const MONGO_URI =
    "mongodb+srv://ryanbergstron2005_db_user:KsvIGmq8QhLANiRI@cluster0.8l9jcd5.mongodb.net/cadastro?appName=Cluster0"

async function connectDatabase() {
    await mongoose.connect(MONGO_URI)
    console.log("mongo conectado com sucesso")
}

module.exports = connectDatabase;