"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostHandler = void 0;
const http_statuses_1 = require("../../core/types/http-statuses");
const posts_repository_1 = require("../repositories/posts.repository");
const input_validation_result_middleware_1 = require("../../core/middlewares/validation/input-validation-result.middleware");
function getPostHandler(req, res) {
    const post = posts_repository_1.postsRepository.getById(req.params.id);
    if (!post) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'post does not exist' }]));
        return;
    }
    res.send(post);
}
exports.getPostHandler = getPostHandler;
