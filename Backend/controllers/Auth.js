const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");
require("dotenv")
//signup route handler
exports.signup = async(req , res) =>{
    try{
        //get data
        console.log(req.body);
        // const {firstname , lastname , email , password} = req.body;
        //checking if user already exist
        const firstname = req.body.firstName;
        const lastname = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:'User already Exists'
            });
        }
        let hashedPassword;
      
        try{
            hashedPassword = await bcrypt.hash(password , 10);
        }
        catch(err){

                return res.status(500).json({
                    success:false,
                    message:"error in hashing password",
                });
        }


        //creat entry for user
        const user = await User.create({
            firstname:firstname , lastname:lastname , email:email , password:hashedPassword
        })

        return res.status(200).json({
            success:true,
            message:"User created Successfully",

        });

    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            success:false,
            message:'user cannot be registered , please try again'
        })
    }
    
}


//login

exports.login = async(req  , res) =>{
    try{
        const{email , password} = req.body;
        //validation
        if(!email || !password){
            return res.status(400).json({
                succcess:false,
                message:'Please fill all the details carefully',
            })
        }
            //check for reg user
        const user = await User.findOne({email});
        //if not registered
        if(!user){

            return res.status(401).json({
                success:false,
                message:'User is not registered',
            })
        }

        const payload = {
            email:user.email,
            id:user._id,
            role:user.role,
        }
        //verify password and generate a jwt token
        if(await bcrypt.compare(password , user.password)){

            let token = jwt.sign(payload , 
                            process.env.JWT_SECRET,{

                                expiresIn:"2h",
                            });
            console.log(user);
            user.token = token;
            user.password = undefined;
            const options = {
                    expires: new Date( Date.now() + 3*24*60*60*1000),
                    httpOnly:true,
            }
            res.cookie("token"  , token , options).status(200).json({
                success:true,
                token,
                user,
                message:'User logged in successfully'
            })

        }
        else{
            //pssword do not match
            return res.status(403).json({
                success:false,
                message:'Password Incorrect'
            })
        }
    }
    

    catch(error){
            console.log(error);
            return res.status(500).json({
                success:false,
                message:"Login failure"
            });
    }
}