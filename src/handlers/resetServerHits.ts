import { type Request, type Response } from "express";
import { config } from "../config.js";

export function resetServerHits(req: Request, res: Response){
    config.fileserverHits = 0;
    res.status(200).send();
}