const mongoose = require('mongoose');
// code 4/4/2024
const local = "mongodb+srv://buiviet289:cmkamH836Hw1eC5D@cluster0.3pq0t.mongodb.net/md19304";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
