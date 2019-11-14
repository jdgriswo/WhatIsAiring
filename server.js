const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};

var Request = require("request");

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.listen(8000, () => { console.log('server running'); });

// Retrieve top 50 currently-airing anime from Jikan
app.route('/api/anime').get((req, res) => {
    /* const response = [{ name: 'Ghost in the Shell' }, { name: 'Spirited Away' }];
    console.log(response);
    res.send({
        response
    }); */
    Request.get("https://api.jikan.moe/v3/top/anime/1/airing", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log('Got response');
        res.status(200).send(JSON.parse(body).top);
    });
});