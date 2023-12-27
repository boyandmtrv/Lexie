require('dotenv').config();
const cors = require('cors');
const express = require('express');
//const mongoose = require('mongoose');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const errorHandler = require('./middlewares/errorMiddleware');


const routes = require('./router');

const app = express();
//const PORT = process.env.PORT || 5000;
const PORT = 5000;

app.use(cors());
expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connected Successfully'))
    .catch(err => console.log(`DB error: ${err}`));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, console.log('App is listening on port ' + PORT));
// mongoose.connect(process.env.MONGODB_URL).then(() => {
//     console.log("Mongodb connected");
//     app.listen(PORT, () => {
//       console.log(`Server is listening on port ${PORT}`);
//     });
//   }).catch((err) => {
//     console.log({ err });
//     process.exit(1);
//   });