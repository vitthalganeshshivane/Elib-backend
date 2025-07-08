import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import userModel from "./userModel";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    //validation
    if (!name || !email || !password) {
        const error = createHttpError(400, "All fields are required");
        return next(error);
    }

    //Database call
    const user = await userModel.findOne({ email });

    if (user) {
        const error = createHttpError(400, "User Already exist");
        return next(error);
    }

    //password-hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
        name,
        email,
        password: hashedPassword,
    });

    //response
    res.json({ id: newUser._id });
};

export { createUser };
