var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/get', function (req, res) {
    const json = {key: 'Pug is Jade' }; //stringifying it
    res.render('index', {data: JSON.stringify(json) }); //turns it into JSON readable format

});

router.post('/post', (req, res, next) => {
    let newword = req.body.string
    let jsonobj = {name: newword, stringlength: newword.length}
    res.render('index', {newdata: JSON.stringify(jsonobj)});

});

router.get('/names/:fname/:lname', ((req, res, next) => {
   // res.send(`Received: ${req.params.fname} ${req.params.lname}`);
    let jsonname = {firstname: `${req.params.fname}`, lastname: `${req.params.lname}`}
    res.render('index', {fullname: JSON.stringify(jsonname)})



}));


module.exports = router;