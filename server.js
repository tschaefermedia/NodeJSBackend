const express = require("express");
const constants = require('./server/Config/Config');
const middlewaresConfig = require('./server/Config/Middleware');
const routes = require('./server/Modules/routes');

const app = express();
middlewaresConfig(app);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

routes(app);

app.listen(constants.default.PORT, err => {
    if (err) {
        throw err;
    } else {
        console.log(`
      Server running on port: ${constants.default.PORT}
      ---
      Running on ${process.env.NODE_ENV}
      ---
    `);
    }
});