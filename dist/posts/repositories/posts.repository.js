"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = void 0;
const in_memory_db_1 = require("../../db/in-memory.db");
const blogs_repository_1 = require("../../blogs/repositories/blogs.repository");
exports.postsRepository = {
    getAll() {
        return in_memory_db_1.db.posts;
    },
    getById(id) {
        var _a;
        return (_a = in_memory_db_1.db.posts.find((d) => d.id === id)) !== null && _a !== void 0 ? _a : null;
    },
    create(dto) {
        // Находим блог - dto.blogId уже string, не нужно Number
        const blog = blogs_repository_1.blogsRepository.getById(Number(dto.blogId));
        if (!blog) {
            throw new Error('Blog not found');
        }
        const newPost = {
            id: Date.now().toString(),
            title: dto.title,
            shortDescription: dto.shortDescription,
            content: dto.content,
            blogId: dto.blogId,
            blogName: blog.name
        };
        in_memory_db_1.db.posts.push(newPost);
        return newPost;
    },
    update(id, dto) {
        const post = in_memory_db_1.db.posts.find((d) => d.id === id);
        if (!post) {
            return false;
        }
        post.title = dto.title;
        post.shortDescription = dto.shortDescription;
        post.content = dto.content;
        post.blogId = dto.blogId;
        return true;
    },
    delete(id) {
        const index = in_memory_db_1.db.posts.findIndex((v) => v.id === id);
        if (index === -1) {
            return false;
        }
        in_memory_db_1.db.posts.splice(index, 1);
        return true;
    },
};
