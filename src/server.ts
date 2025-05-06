import app from "./app";
import prisma from "./config/db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
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
}

startServer();