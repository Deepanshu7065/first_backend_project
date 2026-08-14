import { Request, Response } from "express";
import { db } from "../db";
import { products } from "../db/schema";

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const allProducts = await db.select().from(products);
        res.json({ success: true, products: allProducts });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}