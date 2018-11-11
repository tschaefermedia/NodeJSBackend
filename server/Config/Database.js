const mongoose = require('mongoose');

const constants = require('./Config');

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
try {
    mongoose.connect(constants.default.MONGO_URL, { useNewUrlParser: true });
} catch (err) {
    mongoose.createConnection(constants.default.MONGO_URL);
}

mongoose.connection
    .once('open', () => console.log('MongoDB Running'))
    .on('error', e => {
        throw e;
    });