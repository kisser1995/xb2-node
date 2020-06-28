import { connection } from '../app/database/mysql';
import { postModel } from './post.model';
/**
 * 获取内容列表
 */

export const getPosts = async () => {
    const statement = `
    SELECT * FROM post
    `;

    const [data] = await connection.promise().query(statement);

    return data;
};

/**
 * 创建内容
 */
export const createPost = async (post: postModel) => {
    //准备查询
    const statement = `
        INSERT INTO post
        SET ?
    `;
    // 执行查询
    const [data] = await connection.promise().query(statement, post);

    // 提供数据
    return data;
};

/**
 * 更新内容
 */

export const updatePost = async (postId: number, post: postModel) => {
    //准备查询
    const statement = `
        UPDATE post
        SET ?
        WHERE id=?
    `;
    //执行查询
    const [data] = await connection.promise().query(statement, [post, postId]);

    return data;
};

/**
 * 删除内容
 */

export const deletePost = async (postId: number) => {
    //准备查询
    const statement = `
        DELETE FROM post
        WHERE id=?
    `;
    //执行查询
    const [data] = await connection.promise().query(statement, postId);

    return data;
};
