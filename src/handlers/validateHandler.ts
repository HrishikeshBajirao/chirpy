import { type Request, type Response } from 'express'
import { BadGatewayError } from '../middlewares/errorHandlerMiddleware.js';

export function validateHandler(req: Request, res: Response){

    type parameters = {
        body: string;
    };

    const params: parameters = req.body;

    if(params.body.length > 140){            
        throw new BadGatewayError("Chirp is too long. Max length is 140");
    }

    const cleanString = params.body.replaceAll(/kerfuffle|sharbert|fornax/gi, "****");

    res.send(JSON.stringify({"cleanedBody": cleanString}));
}