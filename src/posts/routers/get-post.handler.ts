import {Request, Response} from "express";
import {HttpStatus} from "../../core/types/http-statuses";
import {postsRepository} from "../repositories/posts.repository";
import {createErrorMessages} from "../../core/middlewares/validation/input-validation-result.middleware";




export function getPostHandler(req: Request, res: Response) {
    const post = postsRepository.getById(req.params.id);

    if (!post) {
        res
            .status(HttpStatus.NotFound)
            .send(createErrorMessages([{ field: 'id', message: 'post does not exist' }]));
        return;
    }


    res.send(post);
}