const express = require('express');
app = express();
app.use(express.json());

app.get("/greeting/*", (req, res) => {
    let name = "Hello "+(req.url.substring(req.url.lastIndexOf("/") + 1, req.url.length));
    let greet = { "message": name};
    res.json(greet);
});

app.post("/data", (req, res) => {
    console.log(req.body);
    let data = req.body;
    let name = { name: "monder hazem edwan 120171241" }
    let result={};
    res.json(Object.assign(result,data,name));

})
app.listen(8080);