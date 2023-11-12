var express = require('express');
var router = express.Router();
var DBconnection=require('../db.con')
/* GET users listing. */
router.get('/', function(req, res, next) {
    var Query=`SELECT 
    tb_employee_role.id,
    tb_employee_role.role_id,
    tb_employee_role.employee_id ,
    tb_m_employee.employee_name as createdby,
    tb_employee_role.c_date  
    FROM "tb_employee_role" 
    INNER JOIN tb_m_employee ON tb_employee_role.c_user_id = tb_m_employee.id;`
    DBconnection.query(Query,(err,result)=>{
      if(err){    console.log("errorresponse",err);return JSON.stringify(err);}
      else{
        console.log("result",result['rowCount']);
        result['rowCount']>0?res.status(200).json({statuscode:200,message:'Success',data:result['rows'],dataCount:result['rowCount']}):res.status(200).json({statuscode:300,message:'No Role Available',data:result})
    }
    })
  
});

module.exports = router;
