"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.send('Admin route reached');
});
exports.router.post('/auth', (req, res) => {
    let body = req.body;
    res.send(body);
});
exports.router.post('/create', (req, res) => {
    let body = req.body;
    res.send(body);
});
exports.router.get('/:id', (req, res) => {
    let params = req.params.id;
    res.send(params);
});
exports.router.put('/:id', (req, res) => {
    let params = req.params.id;
    res.send(params);
});
exports.router.delete('/:id', (req, res) => {
    let params = req.params.id;
    res.send(params);
});
