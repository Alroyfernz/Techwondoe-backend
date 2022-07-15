"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
exports.URL = {
    //MOVIE CRUD apis
    addMovie: "/add/:userId",
    deleteMovie: "/remove/:movieId/:userId",
    updateMovie: "/update/:movieId",
    //USER CRUD apis
    loginUrl: '/login',
    fetchUser: '/details/:userId'
};
