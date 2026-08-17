import { type Request, type Response } from 'express'

export function handlerReadiness(req: Request, res: Response){

    res.set("Content-Type", "text/plain");
    res.set("charset", "utf-8");
    res.send("OK");

}