require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.static('js'));
app.use(express.static('css'));

app.get("*", function(req, res) {
    return res.sendFile(__dirname + '/web-version.html');
});

app.listen(process.env.PORT, () => {
    console.log("Server has started");
});
