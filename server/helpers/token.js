const jwt = require('jsonwebtoken')
const secrictKey = process.env.SECRECT_KEY

const jwtToken =(id,expiresIn)=>{
    return jwt.sign(id,secrictKey,{expiresIn:expiresIn})
}

module.exports =jwtToken