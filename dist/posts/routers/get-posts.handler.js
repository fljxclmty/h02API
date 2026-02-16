"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsHandler = void 0;
const posts_repository_1 = require("../repositories/posts.repository");
function getPostsHandler(req, res) {
    const posts = posts_repository_1.postsRepository.getAll();
    res.send(posts);
}
exports.getPostsHandler = getPostsHandler;
