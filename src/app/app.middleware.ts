import { Request, Response, NextFunction } from 'express';

export const requestUrl = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.log(request.url);
    next();
};

/**
 * 默認異常處理器
 */

export const defaultErrorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    if (error.message) {
        console.log(error.message);
    }

    let statusCode: number, message: string;

    /**
     * 处理异常
     */
    switch (error.message) {
        case 'Name_Is_Required':
            statusCode = 400;
            message = '请提供用户名';
            break;
        case 'Password_Is_Required':
            statusCode = 400;
            message = '请提供密码';
            break;
        case 'User_Is_Exist':
            statusCode = 409;
            message = '用户名已经存在';
            break;
        default:
            statusCode = 500;
            message = '服务暂时出了点问题~';
            break;
    }
    response.status(statusCode).send({ message });
};
