import {BlogEntity} from "../../db/models/BlogEntity";
import {BlogInputModel} from "../dto/BlogInputModel";
import {BlogViewModel} from "../dto/BlogViewModel";
import {db} from "../../db/in-memory.db";



export const blogsRepository = {
    getAll(): BlogViewModel[] {
        return db.blogs;
    },

    getById(id: number): BlogViewModel | null {
        return db.blogs.find((d) => d.id === id.toString()) ?? null; // Если результат поиска равно null или undefined, то вернем null.
    },

    create(newBlog: BlogEntity): BlogInputModel {
        db.blogs.push(newBlog);

        return newBlog;
    },

    update(id: number, dto: BlogInputModel): void {
        const blog = db.blogs.find((d) => d.id === id.toString());

        if (!blog) {
            throw new Error('Blog not exist');
        }

        blog.name = dto.name;
        blog.description = dto.description;
        blog.websiteUrl = dto.websiteUrl;

        return;
    },

    delete(id: number): void {
        const index = db.blogs.findIndex((v) => v.id === id.toString());

        if (index === -1) {
            throw new Error('Blog not exist');
        }

        db.blogs.splice(index, 1);
        return;
    },
};