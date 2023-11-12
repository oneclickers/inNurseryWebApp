var express = require('express');
var router = express.Router();
var DBconnection=require('../db.con')
/* GET users listing. */
router.get('/', function(req, res, next) {
    var Query=`SELECT 
    tb_m_role.id,
    tb_m_role.role_name,
    tb_m_role.role_code,
    tb_m_role.role_discription,
    tb_m_role.is_visibile,
    tb_m_role.is_action,
    tb_m_role.is_editable,
    tb_m_role.is_deletable,
    tb_m_role.is_readonly,
    tb_m_role.is_addable,
    tb_m_role.c_date,
    tb_m_employee.employee_name as created_by
    FROM "tb_m_role" 
    RIGHT JOIN tb_m_employee ON tb_m_role.c_user_id = tb_m_employee.id;`
    DBconnection.query(Query,(err,result)=>{
      if(err){    console.log("errorresponse",err);return JSON.stringify(err);}
      else{
        console.log("result",result['rowCount']);
        result['rowCount']>0?res.status(200).json({statuscode:200,message:'Success',data:result['rows'],dataCount:result['rowCount']}):res.status(200).json({statuscode:300,message:'No Role Available',data:result})
    }
    })
  
});

module.exports = router;
