"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogHandler = void 0;
const input_validation_result_middleware_1 = require("../../../core/middlewares/validation/input-validation-result.middleware");
const http_statuses_1 = require("../../../core/types/http-statuses");
const blogs_repository_1 = require("../../repositories/blogs.repository");
function updateBlogHandler(req, res) {
    const id = Number(req.params.id);
    // 1. Сначала проверяем существование блога (как в delete)
    const existingBlog = blogs_repository_1.blogsRepository.getById(id);
    if (!existingBlog) {
        // 2. Если блога нет - возвращаем 404
        return res.status(http_statuses_1.HttpStatus.NotFound).send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'Blog does not exist' }]));
    }
    // 3. Подготавливаем данные для обновления
    const blogData = {
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl
    };
    // 4. Обновляем блог
    blogs_repository_1.blogsRepository.update(id, blogData);
    // 5. Возвращаем 204 No Content (успешное обновление без тела ответа)
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
}
exports.updateBlogHandler = updateBlogHandler;
