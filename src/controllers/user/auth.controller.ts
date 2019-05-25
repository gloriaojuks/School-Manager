import * as jwt from 'jsonwebtoken';
import { Document } from 'mongoose';
import { Request, Response, NextFunction} from 'express'
import { Student } from '../../interfaces/student.interface';
import { studentModel } from '../../models/student.model';


export let authController = async (req:any | Request, res:Response) => {
    let body: Student = req.body;

    try{
        let phoneCheck: Document[]  = await studentModel.find({ phone: body.phone})
        console.log(phoneCheck.length);
        // checking if a user already exist with that phone number
        if(phoneCheck.length == 1){
           phoneCheck.forEach((user: Document | any) => {
            
            // if the user exist checking to see
            // if the passwords match
            if(body.password == user['password']) {
                jwt.sign(body, 'SIGNIN', (err, token) => {
                    req.session.token = token;
                    console.log('req token : ', req.session.token)
                    res.status(201).json({
                        message: "Login successful",
                        token: token
                    })
                })
            }else{
                res.status(400).json({
                    status: "400 (Bad Request)",
                    message: "Password incorrect"
                });
            }
           })
        }else{
            res.status(401).json({
                message: "there is no user with that phone number"
            })
        }
    }catch (error) {
        res.status(500).json({
            status: "500 (internal server error)",
            message: "An error occured while trying to login please try again"
        })
    }
   
}

class JwtError extends jwt.JsonWebTokenError {
    constructor() {
        super("Invalid token")
    }
}

// authentication middleware to check the json

export let verifyToken = (req: any | Request, res:Response, next: NextFunction) => {
    
    let authToken = req.headers['authorization']
    // console.log(`this is the session token ${req.session.token} `);
    console.log("authToken " + authToken);
    console.log("res token : ", res.locals.token);
    let error = new JwtError();
    if(authToken === res.locals.token){
        next();
    }else{
        res.status(401).json({
            error: "invalid Token",
            massage: error.message
        })
    }
}