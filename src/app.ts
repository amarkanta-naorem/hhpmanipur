import express from "express";
import { createUser } from "./controllers/User/UserController";

const app = express();

app.use(express.json());
app.use("/api", createUser);

export default app;