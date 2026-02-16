"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostHandler = void 0;
const input_validation_result_middleware_1 = require("../../core/middlewares/validation/input-validation-result.middleware");
const posts_repository_1 = require("../repositories/posts.repository");
const http_statuses_1 = require("../../core/types/http-statuses");
function updatePostHandler(req, res) {
    const id = Number(req.params.id);
    const existingPost = posts_repository_1.postsRepository.getById(id);
    if (!existingPost) {
        return res.status(http_statuses_1.HttpStatus.NotFound).send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'Blog does not exist' }]));
    }
    // 3. Подготавливаем данные для обновления
    const postData = {
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
    };
    // 4. Обновляем блог
    posts_repository_1.postsRepository.update(id, postData);
    // 5. Возвращаем 204 No Content (успешное обновление без тела ответа)
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
}
exports.updatePostHandler = updatePostHandler;
