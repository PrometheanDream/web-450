let config = {};

/**
 * Localhost web server configurations
 */
config.web = {};
config.web.port = process.env.PORT || '3000';
config.web.secret = 'topsecret';


/**
 * Development database configurations
 *
 */
config.database = {};
config.database.username = 'wsimps';
config.database.password = 'Mollydog777';
config.database.port = '63402';
config.database.url = 'ds163402.mlab.com';
config.database.name = 'nodequiz';


module.exports = config;
