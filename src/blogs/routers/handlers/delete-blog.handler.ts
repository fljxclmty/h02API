import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../repositories/blogs.repository";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validation-result.middleware";




export function deleteBlogHandler(req: Request, res: Response) {
    const id = req.params.id;
    const blog = blogsRepository.getById(Number(id));

    if (!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{ field: 'id', message: 'Blog does not exist' }]),
            );
        return;
    }

    blogsRepository.delete(Number(id));
    res.sendStatus(HttpStatus.NoContent);
}