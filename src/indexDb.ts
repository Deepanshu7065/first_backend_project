// import { pool } from "./db";


// async function main() {
//     const result = await pool.query("SELECT * FROM users")

//     console.log(result.rows)
// }

// main()

// src/indexDb.ts
import { db } from "./db";
import { users } from "./db/schema";

export async function main() {
    // Ab raw SQL ki jagah Drizzle syntax use karein
    const allUsers = await db.select().from(users);
    console.log(allUsers);
}

