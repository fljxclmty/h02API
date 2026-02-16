"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const delete_blog_handler_1 = require("../handlers/delete-blog.handler");
const get_blog_handler_1 = require("../handlers/get-blog.handler");
const get_blogs_handler_1 = require("../handlers/get-blogs.handler");
const post_blog_handler_1 = require("../handlers/post-blog.handler");
const update_blog_handler_1 = require("../handlers/update-blog.handler");
const params_id_validation_1 = require("../../../core/middlewares/validation/params-id.validation");
const blogs_input_validation_1 = require("../../validation/blogs-input.validation");
const input_validation_result_middleware_1 = require("../../../core/middlewares/validation/input-validation-result.middleware");
const super_admin_guard_middleware_1 = require("../../../auth/middlewares/super-admin.guard-middleware");
exports.blogsRouter = (0, express_1.Router)({});
exports.blogsRouter
    .get('', get_blogs_handler_1.getBlogsHandler)
    .get('/:id', params_id_validation_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, get_blog_handler_1.getBlogHandler)
    .post('', super_admin_guard_middleware_1.superAdminGuardMiddleware, blogs_input_validation_1.blogInputValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, post_blog_handler_1.postBlogHandler)
    .put('/:id', params_id_validation_1.idValidation, super_admin_guard_middleware_1.superAdminGuardMiddleware, blogs_input_validation_1.blogInputValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, update_blog_handler_1.updateBlogHandler)
    .delete('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, delete_blog_handler_1.deleteBlogHandler);
