var express = require('express');
var router = express.Router();
let x;
let y;

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.x == undefined){
        x=Math.random()*10;
        y=Math.random()*5;
        let atanresult = Math.atan(x);
        let expresult = Math.exp(x);
        let expmresult= Math.expm1(y);
        res.send('Math.atan() applied for ' +x +' is ' +atanresult+'\n Math.exp() applied for ' +x +' is ' +expresult+'\n Math.expm1() applied for number ' +y+' is '+expmresult);
    }
    else{
        x =req.query.x;
        let result = Math.atan(x);
        let result2 = Math.exp(x);
        let result3= Math.expm1(y);
        res.send('Math.atan() applied for ' +x +' is ' +atanresult+'\n Math.exp() applied for ' +x +' is ' +expresult+'\n Math.expm1() applied for number ' +y+' is '+expmresult);
    }
});

module.exports = router;
