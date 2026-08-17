import { type Request, type Response } from 'express'

export function validateHandler(req: Request, res: Response){

    type parameters = {
        body: string;
    };

    try{
        const params: parameters = req.body;

        if(params.body.length > 140){
            res.status(400).send({"error": "Chirp is too long"});
            return;
        }

        const cleanString = params.body.replaceAll(/kerfuffle|sharbert|fornax/gi, "****");

        res.send(JSON.stringify({"cleanedBody": cleanString}));
        
    } catch (error) {
        res.status(400).send({"error": "Something went wrong"});
    }
}