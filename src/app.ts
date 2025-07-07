import express from "express";
import userRouter from "./user/userRouter";

const app = express();

//body parser
app.use(express.json());

//routes
app.get("/", (req, res, next) => {
    res.json({ message: "you are currently on the main route" });
});

app.use("/api/users", userRouter);

export default app;
