
const jsonQuery = require('json-query');
const gamesJson = require('../data/gamesData');
const Utilities = require('../Utils');
let Utils = new Utilities();
// const sampleJson = require('../data/sampleData');

// const sampleData = {
//     games: sampleJson
// };

const liveData = {
    games: gamesJson
};

module.exports = (req, res) => {
    // request params may be encoded from the client
    if(Utils.isEncodedURIComponent(req.params.title)) {
        console.log(decodeURIComponent(req.params.title));
    }

    // empty search returns all games
    if(req.params.title == '') {
        const all = jsonQuery(`games`, {data: liveData }).value;
        res.status(200).send(all)
    }

    // regex query using request param as game title key
    const queryRegexUsingReqParam = `games[*title~/${req.params.title}*/i`;
    const queryResult = jsonQuery(queryRegexUsingReqParam, {data: liveData, allowRegexp: true}).value;
    res.status(200).send(queryResult);
};



