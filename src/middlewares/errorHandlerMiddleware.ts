import type { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction){

    const statusCode = err?.statusCode || 500;
    const errMessage = err.message || "Something went wrong on our end";

    console.log(err);
    res.status(statusCode).json({
        "error": errMessage
    });
}

export class BadGatewayError extends Error{
    public readonly statusCode: number;

    constructor(message: string = "Bad gateway"){
        super(message);
        this.statusCode = 400;
    }
}

export class UnauthorizedError extends Error{
    public readonly statusCode: number;

    constructor(message: string = "Unauthorized"){
        super(message);
        this.statusCode = 401;
    }
}

export class ForbiddenError extends Error{
    public readonly statusCode: number;

    constructor(message: string = "Forbidden"){
        super(message);
        this.statusCode = 403;
    }
}

export class NotFoundError extends Error{
    public readonly statusCode: number;

    constructor(message: string = "Not Found"){
        super(message);
        this.statusCode = 404;
    }
}