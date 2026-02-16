"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBlogHandler = void 0;
const in_memory_db_1 = require("../../../db/in-memory.db");
const blogs_repository_1 = require("../../repositories/blogs.repository");
function postBlogHandler(req, res) {
    const newBlog = { id: (in_memory_db_1.db.blogs.length ? (+in_memory_db_1.db.blogs[in_memory_db_1.db.blogs.length - 1].id + 1) : 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
        createdAt: (new Date()).toString() };
    const blog = blogs_repository_1.blogsRepository.create(newBlog);
    res.send(blog);
}
exports.postBlogHandler = postBlogHandler;
