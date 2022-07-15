"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const movie_1 = __importDefault(require("./Routes/movie"));
const user_1 = __importDefault(require("./Routes/user"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const app = (0, express_1.default)();
app.use(express_1.default.json());
mongoose_1.default.connect(MONGO_URL, () => {
    console.log('connection to database succesfull..');
});
app.use('/movie', movie_1.default);
app.use('/user', user_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
});
