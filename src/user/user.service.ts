import { connection } from '../app/database/mysql';
import { UserModel } from './user.model';

/**
 * 创建用户
 */
export const createUser = async (user: UserModel) => {
    //创建查询
    const statement = `
        INSERT INTO user
        SET ?
    `;
    //执行查询
    const [data] = await connection.promise().query(statement, user);

    return data;
};

/**
 * 根据用户名找用户
 */
export const getUserByName = async (name: string) => {
    //准备查询
    const statement = `
        SELECT id,name
        FROM user
        WHERE name=?
    `;
    //执行查询
    const [data] = await connection.promise().query(statement, name);

    return data[0];
};
