process.env.NODE_ENV = 'test';

const tap = require('tap');
const request = require('supertest');
const app = require('../../src/app');
const sampleData = require('../../src/data/sampleData');

tap.test('GET / endpoint 200 - is invalid', function (t) {
	request(app)
	  .get('/')
	  .expect('Content-Type', /json/)
	  .expect(200)
	  .end(function (err, res) {
		t.equals(res.text, 'invalid endpoint', 'invalid endpoint response returned')
		t.end();
	  });
}); 

tap.test('GET /search/testdata endpoint 200 - returns sample data', function (t) {
	request(app)
	  .get('/search/testdata')
	  .expect('Content-Type', /json/)
	  .expect(200)
	  .end(function (err, res) {
		t.equals(JSON.stringify(res.body), JSON.stringify(sampleData), 'sample data properly returned from search endpoint');
		t.end();
	  });
});
