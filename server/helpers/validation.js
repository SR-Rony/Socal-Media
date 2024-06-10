const Users = require('../models/userModel')

const emailValidation = (email)=>{
    return toString(email).toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
}

const userValidation = (text,min,max)=>{
    if(text.length < min || text.length >max){
        return false
    }else{
        return true
    }
}

const userNameValidation = async (userName)=>{
    let isTrue = false
    do {
        let user = await Users.exists({userName})
        if(user){
            userName += (+new Date()*Math.random()).toString().substring(0,1)
            isTrue = true
        }else{

            isTrue = false
        }
        
    } while (isTrue);
    return userName
}

module.exports = {
    emailValidation,
    userValidation,
    userNameValidation
}