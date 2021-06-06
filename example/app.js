const express = require('express')
const { status_xxx } = require('node-console-logg')
const PORT = 5000

app = express()

app.get('/', (req, res) => {
    res.send('GET')
    status_xxx(req, res)
});

app.post('/', (req, res) => {
    res.send('POST')
    status_xxx(req, res)
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
    status_xxx(req, res)
});

app.listen(PORT, () => {
    console.log(`Server has started and listening at port ${PORT}`)
});
