const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, function (){
    console.log("App runnning on port 3000");
});