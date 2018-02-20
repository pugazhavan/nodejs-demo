var express = require('express');
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

	if(req.method === 'OPTIONS') {
		res.sendStatus(200);
	}
	else
		next();
});

app.use('/save', function(req, res, next) {
	var contentType = req.headers['content-type'];
	if (!contentType || contentType !== 'application/json') {
		res.status(400);
        res.json({ message: 'Invalid!', success: 0 });
	}

  	next();
});

app.get('/fetch', function (req, res, next) {
    res.json({ message: 'Hello!', success:1 });
});

app.post('/save', function (req, res, next) {
    res.json({ message: 'Saved!', success:1 });
});

app.delete('/remove', function (req, res, next) {
    res.json({ message: 'Deleted!', success:1 });
});

app.listen(5000, function () {
	console.log('App listening on port 5000!');
});
