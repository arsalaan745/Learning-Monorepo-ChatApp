"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/signup", (req, res) => {
    res.send("Hello World");
});
app.get("/signin", (req, res) => {
    res.send("Hello World");
});
app.get("/chat", (req, res) => {
    res.send("Hii leo");
});
app.listen(3001);
