import redis from "redis";

import { AppError } from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { RateLimiterRedis } from "rate-limiter-flexible";

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),   
});

const limiter = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: "rateLimiter",
    points: 10,
    duration: 1,
});

export default async function rateLimiter( request: Request,
    response: Response,
    next: NextFunction) {  
        
        try {
            await limiter.consume(request.ip);
            return next();
        } catch (error) {
            throw new AppError("Too many requests", 429);            
        }
    }