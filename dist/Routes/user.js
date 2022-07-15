"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URL_1 = require("../Constants/URL");
const user_1 = require("../Controller/user");
const Authentication_1 = __importDefault(require("../Middlewares/Authentication"));
const Router = express_1.default.Router();
Router.post(URL_1.URL.loginUrl, user_1.userLogin);
Router.get(URL_1.URL.fetchUser, Authentication_1.default, user_1.userInfo);
// Router.post("/register",userRegister)
exports.default = Router;
