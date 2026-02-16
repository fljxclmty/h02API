import {Request, Response} from "express";
import {postsRepository} from "../repositories/posts.repository";
import {PostEntity} from "../../db/models/PostEntity";
import {db} from "../../db/in-memory.db";




export function postPostHandler(req: Request, res: Response) {

    const newPost: PostEntity = {id: (db.posts.length ? (+db.posts[db.posts.length - 1].id + 1) : 1).toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: req.body.blogName,
        createdAt: (new Date()).toString()}



    const post = postsRepository.create(newPost);
    res.send(post);
}
