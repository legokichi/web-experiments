const express = require("express");
const morgan = require('morgan')
const app = express();
const port = 8080;

app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.redirect(302, "/user");
});
app.get('/user', function (req, res) {
    res.json({message: 'You are best user!'});
});
app.use(function(req, res, next) {
    res.status(404).json({message: 'Sorry cant find that!'});
});  
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({message:'Something broke!'});
});
app.listen(port, "0.0.0.0", 2048, () => console.log(`Example app listening on port ${port}!`));
