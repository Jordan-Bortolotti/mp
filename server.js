var app = require('./src/app');

app.listen(app.locals.port, '0.0.0.0', function () {
    console.log('MistplaySearch starting on ' + 'http://0.0.0.0:' + app.locals.port);
});