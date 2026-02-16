import {Request, Response} from "express";
import {HttpStatus} from "../../core/types/http-statuses";
import {postsRepository} from "../repositories/posts.repository";
import {createErrorMessages} from "../../core/middlewares/validation/input-validation-result.middleware";




export function deletePostHandler(req: Request, res: Response) {
    const id = req.params.id;
    const post = postsRepository.getById(id);

    if (!post) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{ field: 'id', message: 'Post does not exist' }]),
            );
        return;
    }

    postsRepository.delete(id);
    res.sendStatus(HttpStatus.NoContent);
}