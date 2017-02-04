import { Express } from 'express';
import * as file from './routes/file';

export default (app: Express) => {
    app.get('/file/ls', file.ls);
}