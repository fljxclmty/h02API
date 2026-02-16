"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogHandler = void 0;
const input_validation_result_middleware_1 = require("../../../core/middlewares/validation/input-validation-result.middleware");
const http_statuses_1 = require("../../../core/types/http-statuses");
const blogs_repository_1 = require("../../repositories/blogs.repository");
function getBlogHandler(req, res) {
    const blog = blogs_repository_1.blogsRepository.getById(Number(req.params.id));
    if (!blog) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'Blog does not exist' }]));
        return;
    }
    res.send(blog);
}
exports.getBlogHandler = getBlogHandler;
