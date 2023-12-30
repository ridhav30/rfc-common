import * as httpExpressContext from "express-http-context";
import { verify } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { logger, responseGenerator } from "./helper";
import { config } from "dotenv";
config();
export const httpContext = httpExpressContext;
export const verfyAccessToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sceretKey = process.env.SECRET_KEY ?? "";
    const token = req.get("authorization");
    if (!token) {
      return responseGenerator(res, {
        apiStatus: 401,
        responseStatus: 401,
        message: "Unauthorized access - Token not provided",
        data: [],
      });
    }
    const decoded = verify(token, sceretKey);
    httpContext.set("user", decoded);
    next();
  } catch (error) {
    logger.error(`jwtVerificationError:${error}`);
    return responseGenerator(res, {
      apiStatus: 401,
      responseStatus: 401,
      message: "Unauthorized access - Invalid token",
      data: [],
    });
  }
};
