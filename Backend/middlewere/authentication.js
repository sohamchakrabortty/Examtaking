import express from 'express'
import power from "../db/user.js";
const Authentication = express.Router();
Authentication.use(express.json())
Authentication.post('/register',(req,resp)=>{
  const ans=  power.adduser(req.body.username,req.body.pw,req.body.usertype);
  if(ans){
    resp.send({
        "message":'user registered'
    })
  }else{
    resp.send({
        "message":'user already registered'
    })

  }

})
Authentication.post('/login',(req,resp)=>{
    console.log(req.body);
     
    const ans=power.verifyuser(req.body.username,req.body.pw);
   if(ans){
    
     resp.send({
        "usertype":ans
    })
   }else{

    resp.send({
        "usertype":'invalid user'
    })

   }


})


export default Authentication;