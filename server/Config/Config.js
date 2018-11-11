const appName = "NodeJSBackend";
const devConfig = {
    MONGO_URL: 'mongodb://localhost/'+appName+'-dev',
    JWT_SECRET: 'eWpj=d4+=dD5~P72c9Pm<#K3H{kQZ0AB(z~t(Fw@{M',
};

const testConfig = {
    MONGO_URL: 'mongodb://localhost/'+appName+'-test',
};

const prodConfig = {
    MONGO_URL: 'mongodb://localhost/'+appName+'-prod',
};

const defaultConfig = {
    PORT: process.env.PORT || 3000,
};

function envConfig(env) {
    switch (env) {
        case 'development':
            return devConfig;
        case 'test':
            return testConfig;
        default:
            return prodConfig;
    }
}

exports.default = {
    ...defaultConfig,
    ...envConfig(process.env.NODE_ENV),
};