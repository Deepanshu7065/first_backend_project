// // src/db/index.ts

// import pg from "pg";
// import dotenv from "dotenv";

// dotenv.config()


// const { Pool } = pg;

// export const pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
// });

import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import dotenv from "dotenv";
import * as schema from "./schema";

dotenv.config();

export const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
});

// Drizzle instance initialize karein
export const db = drizzle(pool, { schema });