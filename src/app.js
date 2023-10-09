const express = require('express');

const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const dbConnect = require('./config/dbConfig');
const errorHandler = require('./middlewares/errorMiddleware');

const routes = require('./router');

const app = express();
const PORT = 5000;;

expressConfig(app);
handlebarsConfig(app);

dbConnect()
    .then(() => console.log('DB Connected Successfully'))
    .catch(err => console.log(`DB error: ${err}`));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))