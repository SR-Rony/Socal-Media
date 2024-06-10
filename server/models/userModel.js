const bcrypt = require("bcryptjs")
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema;

const userModel = new Schema(
    {
        fname: {
            type : String,
            required:true,
            trim : true,
            text:true
        } ,
        lname: {
            type : String,
            required:true,
            trim : true,
            text:true
        } ,
        userName: {
            type : String,
            // required:true,
            trim : true,
            text:true,
            unique:true
        } ,
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true,
            lowercase : true,
            Validate : {
                Validator : (v)=>{
                    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
                },
                message : "Please inter a balide email"
            }
        },
        password : {
            type : String,
            required : [true,'user password is require'],
            min: [6, 'Must be at least 6, got {VALUE}'],
            set : (v)=>bcrypt.hashSync(v, bcrypt.genSaltSync(10))
        },
        profileImage:{
            type:String,
            default:""
        },
        coverImage:{
            type:String,
            default:""
        },
        bathMonth:{
            type:Number,
            required:true,
            tirm:true
        },
        bathDay:{
            type:Number,
            required:true,
            tirm:true
        },
        bathYear:{
            type:Number,
            required:true,
            tirm:true
        },
        gender:{
            type:String,
            // required:true
        },
        fridnds:[
            {
                type:ObjectId,
                ref : "userModel"
            }
        ],
        followers:[
            {
                type:ObjectId,
                ref : "userModel"
            }
        ],
        following:[
            {
                type:ObjectId,
                ref : "userModel"
            }
        ],
        search:[
            {
                user:{
                    type:ObjectId,
                    ref : "userModel",
                    // required:true,
                    text:true
                },
                createdAd:{
                    type:Date,
                    // required:true
                }
            }
        ],
        request:[
            {
                type:ObjectId,
                ref : "userModel"
            }
        ],
        details:{
            bio:{
                type:String
            },
            otherName:{
                type:String
            },
            job:{
                type:String
            },
            currentCity:{
                type:String
            },
            wordPlace:{
                type:String
            },
            college:{
                type:String
            },
            highschool:{
                type:String
            },
            homeTown:{
                type:String
            },
            relationShip:{
                type:String,
                enam:[
                    "Single",
                    "In A Relationship",
                    "It's Coplicated",
                    "Married",
                    "Divorced",

                ]
            }
            
        },
        savePost:[
            {
                post:{
                    type:ObjectId,
                    ref:"post"
                },
                savedAt:{
                    type:Date,
                    // required: true
                }
            }
        ],
        veryfied:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model("Users",userModel)