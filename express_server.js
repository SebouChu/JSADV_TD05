const express = require('express')
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.json()) //parse JSON body
app.use(bodyParser.urlencoded()) //parse x-www-form-urlencoded body
app.use('/assets', express.static('static'))

app.use((req, res, next) => {
    req.date = new Date();
    console.log(`[${req.date}] ${req.path} : ${JSON.stringify(req.body)}`)
    next()
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/foo/:myvar', (req, res) => {
    result = { var: req.params.myvar }
    res.type('text/json').send()
})

app.post('/add', (req, res) => {
    var result = {
        result: parseInt(req.body.foo) + parseInt(req.body.bar)
    }
    res.type('text/json').send(result)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))