import * as path from 'path';
import { readdir, lstat, Stats } from 'fs';
import { parallel, waterfall } from 'async';
import { Request, Response } from 'express';

export const ls = (req: Request, res: Response) => {
    let folder = req.get('path') || process.cwd();

    waterfall(
        [
            (callback: Function) => {
                readdir(folder, (err, files) => {
                    callback(err, files)
                });
            },
            (files: string[], callback: Function) => {
                parallel(files.map(file => {
                    let fullpath = path.join(folder, file);
                    return (callback) => {
                        lstat(fullpath, (err, stats) => {
                            callback(err, {
                                name: file,
                                type: stats.isDirectory() ? 'folder' : 'file'
                            });
                        })
                    }
                }), (err, results: Stats[]) => {
                    callback(err, results);
                });
            }
        ],
        (err, results: Stats[]) => {
            res.send(err || results);
        }
    );
};