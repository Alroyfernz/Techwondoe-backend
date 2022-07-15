"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URL_1 = require("../Constants/URL");
const movie_1 = require("../Controller/movie");
const Authentication_1 = __importDefault(require("../Middlewares/Authentication"));
const Router = express_1.default.Router();
Router.post(URL_1.URL.addMovie, Authentication_1.default, movie_1.newMovie);
Router.delete(URL_1.URL.deleteMovie, Authentication_1.default, movie_1.removeMovie);
Router.post(URL_1.URL.updateMovie, Authentication_1.default, movie_1.updateMovie);
exports.default = Router;
