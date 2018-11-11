const userRoutes = require('./User/User.Routes');

module.exports =
    app => {
        app.use('/api/v1/users', userRoutes);
    };