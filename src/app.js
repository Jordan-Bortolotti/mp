const express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    compression = require('compression'),
    url = require('url'),
	cfenv = require('cfenv');
	
	const app = express();

	let appEnv = cfenv.getAppEnv();

	Object.assign(app.locals, {
		port: appEnv.port,
		url: appEnv.url
	});
	
	app 
	.use(compression())
	.use(cookieParser())
	.use(new RegExp('^(?!/(js|css|font|icon|images)/)'), function(req, res, next) {
		console.log('inbound req : ' + req.path);
		if (process.env.NODE_ENV !== 'test') {
			console.log(req);
		}
		next();
	})
	
	.get('/', (req, res) => {
		res.send('invalid endpoint');
	})
	
	// Game search by title
	.get('/search/:title', require('./middleware/search'))


	// Game search by rating
	// .get('/search/rating/:rating', require('./middleware/search'));
	
	module.exports = app;