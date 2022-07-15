"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { ObjectId } = mongoose_1.Schema.Types;
const movieScehma = new mongoose_1.Schema({
    Title: {
        type: String,
        required: true,
    },
    StreamingApp: {
        type: String,
        required: true,
    },
    Rating: {
        type: Number,
        max: 5,
        require: true,
    },
    Review: {
        type: String,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Movie", movieScehma);
