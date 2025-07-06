import express, { Request, Response, NextFunction } from "express";
import createHttpError, { HttpError } from "http-errors";
import { config } from "./config/config";

const app = express();

//routes
app.get("/", (req, res, next) => {
    const error = createHttpError(400, "something went wrong");
    throw error;
});

export default app;
