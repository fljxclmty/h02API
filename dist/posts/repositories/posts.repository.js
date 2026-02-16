"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = void 0;
const in_memory_db_1 = require("../../db/in-memory.db");
exports.postsRepository = {
    getAll() {
        return in_memory_db_1.db.posts;
    },
    getById(id) {
        var _a;
        return (_a = in_memory_db_1.db.posts.find((d) => d.id === id.toString())) !== null && _a !== void 0 ? _a : null; // Если результат поиска равно null или undefined, то вернем null.
    },
    create(newPost) {
        in_memory_db_1.db.posts.push(newPost);
        return newPost;
    },
    update(id, dto) {
        const post = in_memory_db_1.db.posts.find((d) => d.id === id.toString());
        if (!post) {
            throw new Error('Blog does not exist');
        }
        post.title = dto.title;
        post.shortDescription = dto.shortDescription;
        post.content = dto.content;
        post.blogId = dto.blogId;
        return;
    },
    delete(id) {
        const index = in_memory_db_1.db.posts.findIndex((v) => v.id === id.toString());
        if (index === -1) {
            throw new Error('Post does not exist');
        }
        in_memory_db_1.db.posts.splice(index, 1);
        return;
    },
};
