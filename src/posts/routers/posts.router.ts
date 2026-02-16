import {Router} from "express";
import {idValidation} from "../../core/middlewares/validation/params-id.validation";
import {postInputValidation} from "../validation/posts-input.validation";
import {inputValidationResultMiddleware} from "../../core/middlewares/validation/input-validation-result.middleware";
import {superAdminGuardMiddleware} from "../../auth/middlewares/super-admin.guard-middleware";
import {getPostsHandler} from "./get-posts.handler";
import {getPostHandler} from "./get-post.handler";
import {postPostHandler} from "./post-post.handler";
import {updatePostHandler} from "./update-post.handler";
import {deletePostHandler} from "./delete-post.handler";





export const postsRouter = Router({});


postsRouter
    .get('', getPostsHandler)

    .get('/:id', idValidation, inputValidationResultMiddleware,getPostHandler)

    .post(
        '',
        superAdminGuardMiddleware,
        postInputValidation,
        inputValidationResultMiddleware,
        postPostHandler,
    )

    .put(
        '/:id',
        idValidation,
        superAdminGuardMiddleware,
        postInputValidation,
        inputValidationResultMiddleware,
        updatePostHandler,
    )

    .delete(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationResultMiddleware,
        deletePostHandler,
    );