import { NextFunction, Request, Response } from "express";

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {}
