import {PostEntity} from "../../db/models/PostEntity";
import {PostViewModel} from "../dto/PostViewModel";
import {PostInputModel} from "../dto/PostInputModel";
import {db} from "../../db/in-memory.db";



export const postsRepository = {
    getAll(): PostViewModel[] {
        return db.posts;
    },

    getById(id: number): PostViewModel | null {
        return db.posts.find((d) => d.id === id.toString()) ?? null; // Если результат поиска равно null или undefined, то вернем null.
    },

    create(newPost: PostEntity): PostInputModel {
        db.posts.push(newPost);

        return newPost;
    },

    update(id: number, dto: PostInputModel): void {
        const post = db.posts.find((d) => d.id === id.toString());

        if (!post) {
            throw new Error('Blog does not exist');
        }

        post.title = dto.title;
        post.shortDescription = dto.shortDescription;
        post.content = dto.content;
        post.blogId = dto.blogId;
        return;
    },

    delete(id: number): void {
        const index = db.posts.findIndex((v) => v.id === id.toString());

        if (index === -1) {
            throw new Error('Post does not exist');
        }

        db.posts.splice(index, 1);
        return;
    },
};