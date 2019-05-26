"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const student_model_1 = require("../../models/student.model");
exports.authController = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let body = req.body;
    try {
        let phoneCheck = yield student_model_1.studentModel.find({ phone: body.phone });
        console.log(phoneCheck.length);
        // checking if a user already exist with that phone number
        if (phoneCheck.length == 1) {
            phoneCheck.forEach((user) => {
                // if the user exist checking to see
                // if the passwords match
                if (body.password == user['password']) {
                    jwt.sign(body, 'SIGNIN', (err, token) => {
                        req.session.token = token;
                        console.log('req token : ', req.session.token);
                        res.status(201).json({
                            message: "Login successful",
                            token: token
                        });
                    });
                }
                else {
                    res.status(400).json({
                        status: "400 (Bad Request)",
                        message: "Password incorrect"
                    });
                }
            });
        }
        else {
            res.status(401).json({
                message: "there is no user with that phone number"
            });
        }
    }
    catch (error) {
        res.status(500).json({
            status: "500 (internal server error)",
            message: "An error occured while trying to login please try again"
        });
    }
});
class JwtError extends jwt.JsonWebTokenError {
    constructor() {
        super("Invalid token");
    }
}
// authentication middleware to check the json
exports.verifyToken = (req, res, next) => {
    let authToken = req.headers['authorization'];
    // console.log(`this is the session token ${req.session.token} `);
    console.log("authToken " + authToken);
    console.log("res token : ", res.locals.token);
    let error = new JwtError();
    if (authToken === res.locals.token) {
        next();
    }
    else {
        res.status(401).json({
            error: "invalid Token",
            massage: error.message
        });
    }
};
