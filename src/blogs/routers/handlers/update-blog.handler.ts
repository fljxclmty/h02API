import {Request, Response} from "express";
import {createErrorMessages} from "../../../core/middlewares/validation/input-validation-result.middleware";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../repositories/blogs.repository";
import {BlogInputModel} from "../../dto/BlogInputModel";



export function updateBlogHandler(req: Request, res: Response) {
    const id = Number(req.params.id);

    // 1. Сначала проверяем существование блога (как в delete)
    const existingBlog = blogsRepository.getById(id);

    if (!existingBlog) {
        // 2. Если блога нет - возвращаем 404
        return res.status(HttpStatus.NotFound).send(
            createErrorMessages([{ field: 'id', message: 'Blog does not exist' }])
        );
    }

    // 3. Подготавливаем данные для обновления
    const blogData: BlogInputModel = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl
    };

    // 4. Обновляем блог
    blogsRepository.update(id, blogData);

    // 5. Возвращаем 204 No Content (успешное обновление без тела ответа)
    res.sendStatus(HttpStatus.NoContent);
}