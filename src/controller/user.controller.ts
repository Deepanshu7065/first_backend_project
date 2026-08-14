import { Request, Response } from "express";
import { db } from "../db"
import { users } from "../db/schema"



export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await db.select().from(users);
        res.json({ success: true, users: allUsers });
    } catch (error: any) {
        res.status(500).json({ success: false, error: error.message });
    }
};