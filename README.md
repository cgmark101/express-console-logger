# Express-console-logger
Simple and easy to use console logger for HTTP request on Express.js


# Installing:
Start by installing express if you do not have it then the logger

```bash
$ npm i express
$ npm i express-console-logger
```


# Example
```js
const express = require('express')
const { status_xxx } = require('express-console-logger')
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
```

# Output sample:
![output](https://cdn.jsdelivr.net/gh/cgmark101/express-console-logger@main/resources/console-output.png "output console sample")
