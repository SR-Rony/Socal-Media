const Users = require("../models/userModel");

const registerUser = async (req,res)=>{
    try {
       const {
            fname,
            lname,
            userName,
            email,
            password,
            bathMonth,
            bathDay,
            bathYear
       } = req.body;

       const exists = await Users.exists({email:email})
       if(exists){
        return res.status(400).send({
             success:false,
            message:"email already exists"
        })
       }

       const newUser = await new Users({
            fname,
            lname,
            userName,
            email,
            password,
            bathMonth,
            bathDay,
        bathYear
       })

       newUser.save()

      return res.status(200).send({
                success:true,
                message:"new user is created  successfull",
                user:newUser
            })

    } catch (error) {
      return res.status(404).send({
                success:false,
                message:"user is not create successfull"
            })
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