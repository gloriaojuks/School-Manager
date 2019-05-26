"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.send('news route reached');
});
exports.router.post('/', (req, res) => {
    res.send('news route reached');
});
exports.router.put('/:id', (req, res) => {
    res.send('news route reached');
});
exports.router.delete('/:id', (req, res) => {
    res.send('news route reached');
});
