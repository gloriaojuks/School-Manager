"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUser_controller_1 = require("../controllers/user/createUser.controller");
const auth_controller_1 = require("../controllers/user/auth.controller");
exports.router = express_1.default.Router();
// authentication for the user
exports.router.post('/auth', auth_controller_1.authController);
// creating a new user/student
exports.router.post('/', createUser_controller_1.checkUser, createUser_controller_1.createUser);
exports.router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
    });
});
exports.router.put('/:id', auth_controller_1.verifyToken, (req, res) => {
    let id = req.params.id;
    res.json({
        id,
    });
});
// get all subjects
exports.router.get('/:id/subjects', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
    });
});
// create new subjects
exports.router.post('/:id/subjects', (req, res) => {
    let id = req.params.id;
    res.json({
        id,
    });
});
// update exisiting subjects
exports.router.put('/:id/subjects/:subjectId', (req, res) => {
    let id = req.params.id;
    let subjectId = req.params.subjectId;
    res.json({
        id,
        subjectId
    });
});
// delete existing subjects
exports.router.delete('/:id/subjects/:subjectId', (req, res) => {
    let id = req.params.id;
    let subjectId = req.params.subjectId;
    res.json({
        id,
        subjectId
    });
});
