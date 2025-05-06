import { Request, Response } from "express";
import prisma from "../../config/db";

export const createUser = async (req: Request, res: Response) => {
    const { name, email, phone, password, role, gender, dob, occupation, address } = req.body;

    try {
        const user = await prisma.user.create({
            data: { name, email, phone, password, role, gender, dob: new Date(dob), occupation, address }
        });
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ "Error": error.message });
    }
}