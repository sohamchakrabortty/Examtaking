import examBlock from "../db/exam.js";
import express from 'express'
const examEssencials=express.Router();
examEssencials.post('/questions',(req,res)=>{
    const ans=examBlock.getquestionsforstudent(req.body.examid);
    if(ans){
         res.send(ans);

    }else{
        res.send({
            "message":'no exam found'
        })
    }
})
export default examEssencials;

