import {Request, Response} from "express";
import {BlogEntity} from "../../../db/models/BlogEntity";
import {db} from "../../../db/in-memory.db";

import {blogsRepository} from "../../repositories/blogs.repository";




export function postBlogHandler(req: Request, res: Response) {

    const newBlog: BlogEntity = {id: (db.blogs.length ? (+db.blogs[db.blogs.length - 1].id + 1) : 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
        createdAt: (new Date()).toString()}



    const blog = blogsRepository.create(newBlog);
    res.send(blog);
}


