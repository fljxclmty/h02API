"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostHandler = void 0;
const http_statuses_1 = require("../../core/types/http-statuses");
const posts_repository_1 = require("../repositories/posts.repository");
const input_validation_result_middleware_1 = require("../../core/middlewares/validation/input-validation-result.middleware");
function deletePostHandler(req, res) {
    const id = req.params.id;
    const post = posts_repository_1.postsRepository.getById(id);
    if (!post) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'Post does not exist' }]));
        return;
    }
    posts_repository_1.postsRepository.delete(id);
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
}
exports.deletePostHandler = deletePostHandler;
