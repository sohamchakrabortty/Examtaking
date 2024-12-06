const soln=[{
    "id": "1234567",
    "anskey":[
        "a",
        "b"
    ]
}]
const examquestion=[
    {
    "id":"1234567",
    "questions":[{
        "question":"What is the capital of France?",
        // "options":['paris','delhi','kolkata','arambagh'],
        "options":[{
            "a":"paris",
            "b":"delhi",
            "c":"kolkata",
            "d":"arambagh"
        }]
    },
    {
        "question":"What is the capital of India?",
        // "options":['paris','delhi','kolkata','arambagh'],
        "options":[{
            "a":"paris",
            "b":"delhi",
            "c":"kolkata",
            "d":"arambagh"
        }]
    },
]


}]
class examblock{
    constructor(){

    }
    getquestionsforstudent(examid){
        for(let i=0;i<examquestion.length;i++){
            if(examquestion[i].id==examid){
                return examquestion[i];
            }
        }
        return false;

    }
}
const examBlock=new examblock();
export default examBlock;