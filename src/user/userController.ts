import { NextFunction, Request, Response } from "express";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body;
    res.json({ message: `user registered successfully ${name}` });
};

export { createUser };
