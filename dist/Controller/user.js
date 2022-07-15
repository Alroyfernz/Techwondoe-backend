"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegister = exports.userInfo = exports.userLogin = void 0;
const User_1 = __importDefault(require("../Model/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("reached here...");
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.find({ Email: email });
        if (!user) {
            res.status(500).json({
                messgae: `No user with email ${email} exists.`,
            });
        }
        if (!bcrypt_1.default.compare(password, user.Password))
            res.status(500).json({
                messgae: `you have entered an invalid password.`,
            });
        const token = jsonwebtoken_1.default.sign({ email: user.email }, PRIVATE_KEY);
        res.status(200).json({
            message: "User Login succesfull",
            token,
            data: user,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: `Error caused due to ${error.message}`
        });
    }
});
exports.userLogin = userLogin;
const userInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const userData = yield User_1.default.findById(userId).populate("MovieList");
        res.status(200).json({
            message: "User Data fetched succesfully",
            data: userData
        });
    }
    catch (error) {
        return res.status(500).json({
            message: `Error caused due to ${error.message}`
        });
    }
});
exports.userInfo = userInfo;
const userRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User_1.default(req.body);
        yield user.save();
        res.status(200).json("user saved succ.");
    }
    catch (error) {
    }
});
exports.userRegister = userRegister;
