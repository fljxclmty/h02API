import { Request, Response } from "express";
import { postsRepository } from "../repositories/posts.repository";
import { PostInputModel } from "../dto/PostInputModel";
import {HttpStatus} from "../../core/types/http-statuses";
import { blogsRepository } from "../../blogs/repositories/blogs.repository";
import {createErrorMessages} from "../../core/middlewares/validation/input-validation-result.middleware";

export function postPostHandler(req: Request, res: Response) {
    // 1. Получаем данные из body (PostInputModel)
    const dto: PostInputModel = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId  // оставляем как string
    };

    // 2. Проверяем существование блога (передаем string, не Number)
    const blog = blogsRepository.getById(Number(dto.blogId));

    if (!blog) {
        return res.status(HttpStatus.BadRequest).json(
            createErrorMessages([{
                field: 'blogId',
                message: 'Blog not found'
            }])
        );
    }

    // 3. УБИРАЕМ генерацию newId - она не нужна

    // 4. Создаем пост
    const newPost = postsRepository.create(dto);

    // 5. Возвращаем 201 Created
    res.status(HttpStatus.Created).json(newPost);
}