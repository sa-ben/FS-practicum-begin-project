const mongoose = require('mongoose')

const connectDB = async () => {
    // try { await mongoose.connect(process.env.DB_URI) }
    try { await mongoose.connect('mongodb://host.docker.internal:27017') }
    catch (err) {
        console.log('error connection to database' + err);
    }
}

module.exports = connectDB