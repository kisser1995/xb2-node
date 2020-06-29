import { Request, Response, NextFunction, request } from 'express';
import * as userService from './user.service';
import bcrypt from 'bcrypt';

/**
 * 验证用户数据
 */
export const validateUserData = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log('开始验证用户数据');

    //准备数据
    const { name, password } = request.body;

    //验证必填数据
    if (!name) return next(new Error('Name_Is_Required'));
    if (!password) return next(new Error('Password_Is_Required'));

    //验证用户名
    const user = await userService.getUserByName(name);
    if (user) return next(new Error('User_Is_Exist'));
    next();
};
/**
 * HASH密码
 */

export const hashPassword = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    //准备数据
    const { password } = request.body;

    //HASH 密码
    request.body.password = await bcrypt.hash(password, 10);

    next();
};
