import {PostEntity} from "../../db/models/PostEntity";
import {PostViewModel} from "../dto/PostViewModel";
import {PostInputModel} from "../dto/PostInputModel";
import {db} from "../../db/in-memory.db";
import {blogsRepository} from "../../blogs/repositories/blogs.repository";

export const postsRepository = {
    getAll(): PostViewModel[] {
        return db.posts;
    },

    getById(id: string): PostViewModel | null {
        return db.posts.find((d) => d.id === id) ?? null;
    },

    create(dto: PostInputModel): PostEntity {
        // Находим блог - dto.blogId уже string, не нужно Number
        const blog = blogsRepository.getById(Number(dto.blogId));

        if (!blog) {
            throw new Error('Blog not found');
        }

        const newPost: PostEntity = {
            id: Date.now().toString(),
            title: dto.title,
            shortDescription: dto.shortDescription,
            content: dto.content,
            blogId: dto.blogId,
            blogName: blog.name
        };

        db.posts.push(newPost);
        return newPost;
    },

    update(id: string, dto: PostInputModel): boolean {
        const post = db.posts.find((d) => d.id === id);

        if (!post) {
            return false;
        }

        post.title = dto.title;
        post.shortDescription = dto.shortDescription;
        post.content = dto.content;
        post.blogId = dto.blogId;

        return true;
    },

    delete(id: string): boolean {
        const index = db.posts.findIndex((v) => v.id === id);

        if (index === -1) {
            return false;
        }

        db.posts.splice(index, 1);
        return true;
    },
};