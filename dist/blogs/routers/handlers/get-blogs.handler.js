"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogsHandler = void 0;
const blogs_repository_1 = require("../../repositories/blogs.repository");
function getBlogsHandler(req, res) {
    const blogs = blogs_repository_1.blogsRepository.getAll();
    res.send(blogs);
}
exports.getBlogsHandler = getBlogsHandler;
