import { studentModel } from '../../models/student.model';
import { Request, Response, NextFunction} from 'express'
import { Student } from '../../interfaces/student.interface'

export let checkUser = async (req: Request, res: Response, next: NextFunction) => {
    let body: Student = req.body;
    try {
        let result = await studentModel.find({ email: body.email})
        if(result.length > 1){
            res.status(400).send({
                status: "400 (Bad Request)",
                message: "User already exists with this email"
            });
        }else{
            let passwordExist = await studentModel.find({ phone: body.phone})
            if(passwordExist.length > 1){ let result = await studentModel.find({ email: body.email})
            if(result.length > 1){
                res.status(400).send({
                    status: "400 (Bad Request)",
                    message: "User already exists with this email"
                });
            }else{
                let passwordExist = await studentModel.find({ phone: body.phone})
                if(passwordExist.length > 1){
                    res.status(400).json({
                        status: "400 (Bad Request)",
                        message: "A user with this phone number already exists"
                    });
                }else{
                    next();
                }
            }
                res.status(400).json({
                    status: "400 (Bad Request)",
                    message: "A user with this phone number already exists"
                });
            }else{
                next();
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "an error occured",
            error
        })
    }
}


export let createUser = (req: Request, res: Response, next: NextFunction) => {
    let body = req.body;
    let ne = studentModel.insertMany(req.body)
    ne.then(user => {
        res.status(201).json({
            massage: "user created successfully",
            user,
        })
    })
    .catch(err => {
        res.status(500).json({
            message: "An error occured while trying to create the user",
            error: err
        })
    })
}