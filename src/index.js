require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
// const dbConnect = require('./config/dbConfig');
const errorHandler = require('./middlewares/errorMiddleware');

const routes = require('./router');

const app = express();
const PORT = process.env.PORT || 5000;

expressConfig(app);
handlebarsConfig(app);

// dbConnect()
//     .then(() => console.log('DB Connected Successfully'))
//     .catch(err => console.log(`DB error: ${err}`));

mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

app.use(routes);
app.use(errorHandler);

connectDB()
.then(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});
