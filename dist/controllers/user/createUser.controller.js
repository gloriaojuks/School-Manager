"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = require("../../models/student.model");
exports.checkUser = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let body = req.body;
    try {
        let result = yield student_model_1.studentModel.find({ email: body.email });
        if (result.length > 1) {
            res.status(400).send({
                status: "400 (Bad Request)",
                message: "User already exists with this email"
            });
        }
        else {
            let passwordExist = yield student_model_1.studentModel.find({ phone: body.phone });
            if (passwordExist.length > 1) {
                let result = yield student_model_1.studentModel.find({ email: body.email });
                if (result.length > 1) {
                    res.status(400).send({
                        status: "400 (Bad Request)",
                        message: "User already exists with this email"
                    });
                }
                else {
                    let passwordExist = yield student_model_1.studentModel.find({ phone: body.phone });
                    if (passwordExist.length > 1) {
                        res.status(400).json({
                            status: "400 (Bad Request)",
                            message: "A user with this phone number already exists"
                        });
                    }
                    else {
                        next();
                    }
                }
                res.status(400).json({
                    status: "400 (Bad Request)",
                    message: "A user with this phone number already exists"
                });
            }
            else {
                next();
            }
        }
    }
    catch (error) {
        res.status(500).json({
            message: "an error occured",
            error
        });
    }
});
exports.createUser = (req, res, next) => {
    let body = req.body;
    let ne = student_model_1.studentModel.insertMany(req.body);
    ne.then(user => {
        res.status(201).json({
            massage: "user created successfully",
            user,
        });
    })
        .catch(err => {
        res.status(500).json({
            message: "An error occured while trying to create the user",
            error: err
        });
    });
};
