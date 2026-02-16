"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const params_id_validation_1 = require("../../core/middlewares/validation/params-id.validation");
const posts_input_validation_1 = require("../validation/posts-input.validation");
const input_validation_result_middleware_1 = require("../../core/middlewares/validation/input-validation-result.middleware");
const super_admin_guard_middleware_1 = require("../../auth/middlewares/super-admin.guard-middleware");
const get_posts_handler_1 = require("./get-posts.handler");
const get_post_handler_1 = require("./get-post.handler");
const post_post_handler_1 = require("./post-post.handler");
const update_post_handler_1 = require("./update-post.handler");
const delete_post_handler_1 = require("./delete-post.handler");
exports.postsRouter = (0, express_1.Router)({});
exports.postsRouter
    .get('', get_posts_handler_1.getPostsHandler)
    .get('/:id', params_id_validation_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, get_post_handler_1.getPostHandler)
    .post('', super_admin_guard_middleware_1.superAdminGuardMiddleware, posts_input_validation_1.postInputValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, post_post_handler_1.postPostHandler)
    .put('/:id', params_id_validation_1.idValidation, super_admin_guard_middleware_1.superAdminGuardMiddleware, posts_input_validation_1.postInputValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, update_post_handler_1.updatePostHandler)
    .delete('/:id', super_admin_guard_middleware_1.superAdminGuardMiddleware, params_id_validation_1.idValidation, input_validation_result_middleware_1.inputValidationResultMiddleware, delete_post_handler_1.deletePostHandler);
