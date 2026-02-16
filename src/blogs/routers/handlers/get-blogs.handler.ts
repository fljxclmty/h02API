import {Request, Response} from "express";


import {blogsRepository} from "../../repositories/blogs.repository";



export function getBlogsHandler(req: Request, res: Response) {
    const blogs = blogsRepository.getAll();
    res.send(blogs);
}


