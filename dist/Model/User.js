"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { ObjectId } = mongoose_1.Schema.Types;
const userScehma = new mongoose_1.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    MovieList: [{
            type: ObjectId,
            ref: 'Movie'
        }]
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("User", userScehma);
