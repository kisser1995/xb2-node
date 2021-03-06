import { Request, Response, NextFunction, response } from 'express';
import { getPosts, createPost, updatePost, deletePost } from './post.service';
import _ from 'lodash';
/**
 * 内容列表
 */

export const index = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const posts = await getPosts();
        response.send(posts);
    } catch (error) {
        next(error);
    }
};

/**
 * 创建内容
 */

export const store = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    //准备数据
    const { title, content } = request.body;

    //创建内容
    try {
        const data = await createPost({ title, content });
        response.status(201).send(data);
    } catch (error) {
        next(error);
    }
};

/**
 * 更新内容
 */

export const update = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    //获取内容ID
    const { postId } = request.params;

    //准备数据
    const post = _.pick(request.body, ['title', 'content']);

    //更新
    try {
        const data = await updatePost(parseInt(postId, 10), post);
        response.send(data);
    } catch (error) {
        next(error);
    }
};
/**
 * 删除内容
 */

export const destroy = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    // 获取内容ID
    const { postId } = request.params;

    //删除内容
    try {
        const data = await deletePost(parseInt(postId, 10));
        response.send(data);
    } catch (error) {
        next(error);
    }
};
