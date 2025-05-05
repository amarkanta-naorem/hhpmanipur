import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
})


prisma
    .$connect()
    .then(() => {
        console.log("Database connected...");
        return prisma.$executeRaw`SELECT 1`;
    })
    .then(() => {
        console.log("Database is ready...");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error: any) => {
        console.error("Error connecting to the database:", error);
        process.exit(1);
    });
