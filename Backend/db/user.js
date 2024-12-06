let arr=[{
    "username":'ritam',
    'password':'abc',
    'usertype':'student'

},
{
    "username":'soham',
    'password':'abcd',
    'usertype':'teacher'

}
];

class powerdb{
    constructor(){

    }
     verifyuser(user,pw){
        for(let i=0;i<arr.length;i++){
            if(arr[i].username==user&&arr[i].password==pw){
                return arr[i].usertype;
            }
        }
        return false;

    }
    adduser(user,pw,usertype){
        for(let i=0;i<arr.length;i++){
            if(arr[i].username==user&&arr[i].password==pw){
                return false;
            }
        }
        arr.push({ "username":user,
            'password':pw,
            'usertype':usertype})
        return true;

    }

};
const power=new powerdb();
export default  power;
