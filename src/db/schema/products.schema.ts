import { numeric, pgTable, serial, varchar } from "drizzle-orm/pg-core";


export const products = pgTable("products", {
    id: serial("id").primaryKey(),
    product_name: varchar("product_name", { length: 100 }),
    price: numeric("price", { precision: 10, scale: 2 }),
    quantity: numeric("quantity", { precision: 10, scale: 2 })
})