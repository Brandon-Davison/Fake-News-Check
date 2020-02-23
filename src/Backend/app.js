const express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();  

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// router.get('/', (req, res, next) => {
//     res.json({ message: 'Here is a pointless get api' });   
// });

// Add a new item
app.post("/article", (req, res) => {
    const item = req.body;
    console.log('Adding new item: ', item);

    return res.status(201).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    }) 
});

 app.use('/api', router);

 app.listen(3005, () => {
    console.log("Server running on port 3005");
});

