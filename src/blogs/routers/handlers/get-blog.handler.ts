import {Request, Response} from "express";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validation-result.middleware";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../repositories/blogs.repository";



export function getBlogHandler(req: Request, res: Response) {
    const blog = blogsRepository.getById(Number(req.params.id));

    if (!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'id', message: 'Blog does not exist' }]));
        return;
    }


    res.send(blog);
}