
const jsonQuery = require('json-query');
// const sampleJson = require('../data/sampleData');
const gamesJson = require('../data/gamesData');
const Utilities = require('../Utils');
let Utils = new Utilities();

// const sampleData = {
//     games: sampleJson
// };

const liveData = {
    games: gamesJson
};

module.exports = (req, res) => {
    console.log(JSON.stringify(req.params.title));
    if(Utils.isEncodedURIComponent(req.params.title)) {
        console.log(decodeURIComponent(req.params.title));
    }

    if(req.params.title == '') {
        const all = jsonQuery(`games`, {data: liveData }).value;
        res.status(200).send(all)
    }
    const queryResult = jsonQuery(`games[*title~/${req.params.title}*/i`, {data: liveData, allowRegexp: true}).value;
    res.status(200).send(queryResult);
};



