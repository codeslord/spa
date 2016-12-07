/* vim: set tabstop=2 shiftwidth=2 expandtab : */

/**
 * This is the SPA configuration
 */
config = {
	/** Database configuration */
	db: {
		/** Mongo DB host */
		host: process.env.IP,
		/** Mongo DB port */
		port: 27017, 
		/** Mongo DB database name; will get created if not exists */
		database: 'spa',
	},
	/** Port number we listen on */
	port: process.env.PORT,
}

module.exports = config;
