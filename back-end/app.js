const express = require("express");

const app = express();

// json parser
const jsonParser = express.json();

// CORS settings
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
    next();  // send settings to methods
});


// GET methods
app.get("/sum", function(request, response){
    const number1 = parseInt(request.query.num1);
    const number2 = parseInt(request.query.num2);
    const sum = number1 + number2;

    response.send({result: sum});
});

// POST methods
app.post("/postuser", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);

    let username = request.body.name;
    let userage = request.body.age;
    userage = userage + 10;

    response.json({"name": username, "age": userage});
});

app.listen(3000);