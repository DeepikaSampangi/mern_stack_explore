const express = require('express');

const app = express();

app.use(express.static('public/index.html'));

app.listen(3000, function (){
    console.log("App runnning on port 3000");
});