import {Request, Response} from "express";
import {createErrorMessages} from "../../core/middlewares/validation/input-validation-result.middleware";
import {postsRepository} from "../repositories/posts.repository";
import {HttpStatus} from "../../core/types/http-statuses";
import {PostInputModel} from "../dto/PostInputModel";

export function updatePostHandler(req: Request, res: Response) {
    const id = Number(req.params.id);


    const existingPost = postsRepository.getById((id).toString());

    if (!existingPost) {

        return res.status(HttpStatus.NotFound).send(
            createErrorMessages([{ field: 'id', message: 'Blog does not exist' }])
        );
    }

    // 3. Подготавливаем данные для обновления
    const postData: PostInputModel = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,

    };

    // 4. Обновляем блог
    postsRepository.update((id).toString(), postData);

    // 5. Возвращаем 204 No Content (успешное обновление без тела ответа)
    res.sendStatus(HttpStatus.NoContent);
}