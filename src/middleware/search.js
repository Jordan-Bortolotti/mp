
const sampleJson = require('../data/sampleData');

module.exports = function(req, res) {
    res.status(200).send(sampleJson);
};