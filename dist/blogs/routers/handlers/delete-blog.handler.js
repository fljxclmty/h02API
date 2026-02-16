"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlogHandler = void 0;
const http_statuses_1 = require("../../../core/types/http-statuses");
const blogs_repository_1 = require("../../repositories/blogs.repository");
const input_validation_result_middleware_1 = require("../../../core/middlewares/validation/input-validation-result.middleware");
function deleteBlogHandler(req, res) {
    const id = req.params.id;
    const blog = blogs_repository_1.blogsRepository.getById(Number(id));
    if (!blog) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, input_validation_result_middleware_1.createErrorMessages)([{ field: 'id', message: 'Blog does not exist' }]));
        return;
    }
    blogs_repository_1.blogsRepository.delete(Number(id));
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
}
exports.deleteBlogHandler = deleteBlogHandler;
