"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = void 0;
const in_memory_db_1 = require("../../db/in-memory.db");
exports.blogsRepository = {
    getAll() {
        return in_memory_db_1.db.blogs;
    },
    getById(id) {
        var _a;
        return (_a = in_memory_db_1.db.blogs.find((d) => d.id === id.toString())) !== null && _a !== void 0 ? _a : null; // Если результат поиска равно null или undefined, то вернем null.
    },
    create(newBlog) {
        in_memory_db_1.db.blogs.push(newBlog);
        return newBlog;
    },
    update(id, dto) {
        const blog = in_memory_db_1.db.blogs.find((d) => d.id === id.toString());
        if (!blog) {
            throw new Error('Blog not exist');
        }
        blog.name = dto.name;
        blog.description = dto.description;
        blog.websiteUrl = dto.websiteUrl;
        return;
    },
    delete(id) {
        const index = in_memory_db_1.db.blogs.findIndex((v) => v.id === id.toString());
        if (index === -1) {
            throw new Error('Blog not exist');
        }
        in_memory_db_1.db.blogs.splice(index, 1);
        return;
    },
};
