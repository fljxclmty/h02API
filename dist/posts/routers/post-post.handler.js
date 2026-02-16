"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPostHandler = void 0;
const posts_repository_1 = require("../repositories/posts.repository");
const http_statuses_1 = require("../../core/types/http-statuses");
const blogs_repository_1 = require("../../blogs/repositories/blogs.repository");
const input_validation_result_middleware_1 = require("../../core/middlewares/validation/input-validation-result.middleware");
function postPostHandler(req, res) {
    // 1. Получаем данные из body (PostInputModel)
    const dto = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId // оставляем как string
    };
    // 2. Проверяем существование блога (передаем string, не Number)
    const blog = blogs_repository_1.blogsRepository.getById(Number(dto.blogId));
    if (!blog) {
        return res.status(http_statuses_1.HttpStatus.BadRequest).json((0, input_validation_result_middleware_1.createErrorMessages)([{
                field: 'blogId',
                message: 'Blog not found'
            }]));
    }
    // 3. УБИРАЕМ генерацию newId - она не нужна
    // 4. Создаем пост
    const newPost = posts_repository_1.postsRepository.create(dto);
    // 5. Возвращаем 201 Created
    res.status(http_statuses_1.HttpStatus.Created).json(newPost);
}
exports.postPostHandler = postPostHandler;
