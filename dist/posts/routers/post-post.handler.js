"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPostHandler = void 0;
const posts_repository_1 = require("../repositories/posts.repository");
const in_memory_db_1 = require("../../db/in-memory.db");
function postPostHandler(req, res) {
    const newPost = { id: (in_memory_db_1.db.posts.length ? (+in_memory_db_1.db.posts[in_memory_db_1.db.posts.length - 1].id + 1) : 1).toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: req.body.blogName,
    };
    const post = posts_repository_1.postsRepository.create(newPost);
    res.send(post);
}
exports.postPostHandler = postPostHandler;
