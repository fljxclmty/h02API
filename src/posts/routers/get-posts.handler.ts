import {Request, Response} from "express";

import {postsRepository} from "../repositories/posts.repository";





export function getPostsHandler(req: Request, res: Response) {
    const posts = postsRepository.getAll();
    res.send(posts);
}