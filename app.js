const express = require('express')
const app = express()

app.listen(process.env.PORT || 3000)

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(app.get('port'), function () {
    console.log('App is running, server is listening on port ', app.get('port'));
});