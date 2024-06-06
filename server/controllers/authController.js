
const registerUser = (req,res)=>{
    try {
       const {name,email,password}= req.body

    } catch (error) {
        res.send(error)
    }
}

// get all user
const getUser = (req,res)=>{
    try {
        res.send("all user")
    } catch (error) {
        res.send(error)
    }
} 

module.exports = {getUser,registerUser}