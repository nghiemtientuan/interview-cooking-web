// utils
import {paginateResponse} from '../../../utils/paginateResponse';
import {responseFormat} from '../../../utils/responseFormat';
import {response404} from '../../../utils/response404';

// repositories
import {RecipeRepository} from '../../../repositories/RecipeRepository';
import {RecipeCommentRepository} from '../../../repositories/RecipeCommentRepository';
import {UserRepository} from '../../../repositories/UserRepository';

// responses
import {response422} from '../../../utils/response422';
import {response400} from "../../../utils/response400";

export const index = async (req, res, next) => {
    const query = req.query;
    const result = await RecipeRepository.getRecipes(query);

    return res.json(paginateResponse(result));
};

export const show = async (req, res, next) => {
    const isAuthContent = !!req?.userFirebase
    const query = req.params;
    const {id} = query;
    const result = await RecipeRepository.findRecipe(id, isAuthContent);

    if (result) {
        return res.json(responseFormat(result));
    }

    return response404(res);
};

export const getRelationRecipes = async (req, res, next) => {
    const query = req.params;
    const {id} = query;
    const result = await RecipeRepository.getRelationRecipes(id);

    return res.json(responseFormat(result));
};

// comment
export const createNewComment = async (req, res, next) => {
    const {params, userAuth} = req;
    const {id: recipeId} = params;
    const {body} = req;
    const {content = ''} = body;

    if (!userAuth) {
        return response400(res, 'User not found!');
    }

    // Validation
    let errors = [];
    if (content) {
        if (content.length > 255) {
            errors.push({
                field: 'content',
                message: 'Bình luận không được lơn hơn 255 ký tự',
            });
        }
    } else {
        errors.push({
            field: 'content',
            message: 'Bình luận không được để trống',
        });
    }
    if (errors && errors.length) {
        return response422(res, errors);
    }

    try {
        await RecipeCommentRepository.createRecipeComment(recipeId, userAuth.id, content);
        const recipe = await RecipeRepository.findRecipe(recipeId, true);

        return res.json(responseFormat(recipe));
    } catch (error) {
        return response400(res, 'Create comment error');
    }
};

export const updateComment = async (req, res, next) => {
    const {params, userAuth} = req;
    const {id: recipeId, commentId} = params;
    const {body} = req;
    const {content = ''} = body;

    if (!userAuth) {
        return response400(res, 'User not found!');
    }
    const comment = await RecipeCommentRepository.findRecipeCommentById(recipeId, commentId, userAuth.id);
    if (!comment) {
        return response404(res, 'Comment not found!');
    }

    // Validation
    let errors = [];
    if (content) {
        if (content.length > 255) {
            errors.push({
                field: 'content',
                message: 'Bình luận không được lơn hơn 255 ký tự',
            });
        }
    } else {
        errors.push({
            field: 'content',
            message: 'Bình luận không được để trống',
        });
    }
    if (errors && errors.length) {
        return response422(res, errors);
    }

    try {
        comment.content = content;
        await RecipeCommentRepository.save(comment);
        const recipe = await RecipeRepository.findRecipe(recipeId, true);

        return res.json(responseFormat(recipe));
    } catch (error) {
        return response400(res, 'Update comment error');
    }
};

export const deleteComment = async (req, res, next) => {
    const {params} = req;
    const {id: recipeId, commentId} = params;

    if (!req?.userFirebase?.uid) {
        return response400(res, 'User not found!');
    }
    const user = await UserRepository.getUserByFirebaseUID(req?.userFirebase?.uid);
    if (!user) {
        return response400(res, 'User not found!');
    }
    const comment = await RecipeCommentRepository.findRecipeCommentById(recipeId, commentId, user.id);
    if (!comment) {
        return response404(res, 'Comment not found!');
    }

    try {
        await RecipeCommentRepository.delete(comment.id);
        const recipe = await RecipeRepository.findRecipe(recipeId, true);

        return res.json(responseFormat(recipe));
    } catch (error) {
        return response400(res, 'Delete comment error');
    }
};
