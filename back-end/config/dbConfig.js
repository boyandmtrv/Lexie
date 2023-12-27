const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });

console.log('Current working directory:', process.cwd());

const uri = process.env.MONGODB_URL;

console.log(uri);

async function dbConnect() {
    await mongoose.connect(uri);
};

module.exports = dbConnect;