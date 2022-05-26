"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const urlcontrol_1 = require("../URLController/urlcontrol");
const api = (0, express_1.default)();
api.use(express_1.default.json);
const urlcontroller = new urlcontrol_1.URLController();
api.post("/shorten", urlcontroller.shorten);
api.get('/test', (req, res) => {
    res.json({ success: true });
});
api.listen(5000, () => console.log("Express iniciado"));
