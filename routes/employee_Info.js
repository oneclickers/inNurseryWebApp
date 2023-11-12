var express = require('express');
var router = express.Router();
var DBconnection=require('../db.con')
/* GET users listing. */
router.get('/', function(req, res, next) {
    var Query=`SELECT * FROM "tb_m_employee"`
    DBconnection.query(Query,(err,result)=>{
      if(err){    console.log("errorresponse",err);return JSON.stringify(err);}
      else{
        console.log("result",result['rowCount']);
        result['rowCount']>0?res.status(200).json({statuscode:200,message:'Success',data:result['rows'],dataCount:result['rowCount']}):res.status(200).json({statuscode:300,message:'No Role Available',data:result})
    }
    })
  
});

module.exports = router;
