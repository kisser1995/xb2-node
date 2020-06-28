import mysql from 'mysql2';
import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_PASSWORD,
    MYSQL_PORT,
    MYSQL_USER,
} from '../../app/app.config';

/**
 * 创建服务连接
 */

export const connection = mysql.createConnection({
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT,10),
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
});
