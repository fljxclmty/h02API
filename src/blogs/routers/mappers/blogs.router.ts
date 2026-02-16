import {Router} from "express";
import {deleteBlogHandler} from "../handlers/delete-blog.handler";
import {getBlogHandler} from "../handlers/get-blog.handler";
import {getBlogsHandler} from "../handlers/get-blogs.handler";
import {postBlogHandler} from "../handlers/post-blog.handler";
import {updateBlogHandler} from "../handlers/update-blog.handler";

import {idValidation} from "../../../core/middlewares/validation/params-id.validation";

import {blogInputValidation} from "../../validation/blogs-input.validation";

import {inputValidationResultMiddleware} from "../../../core/middlewares/validation/input-validation-result.middleware";

import {superAdminGuardMiddleware} from "../../../auth/middlewares/super-admin.guard-middleware";

export const blogsRouter = Router({});


blogsRouter
    .get('', getBlogsHandler)

    .get('/:id', idValidation, inputValidationResultMiddleware,getBlogHandler)

    .post(
        '',
        superAdminGuardMiddleware,
        blogInputValidation,
        inputValidationResultMiddleware,
        postBlogHandler,
    )

    .put(
        '/:id',
        idValidation,
        superAdminGuardMiddleware,
        blogInputValidation,
        inputValidationResultMiddleware,
        updateBlogHandler,
    )

    .delete(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        deleteBlogHandler,
    );