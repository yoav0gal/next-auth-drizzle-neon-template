import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// Set your Neon connection string in the environment variable NEON_POSTGRES_URL
const sql = neon(process.env.POSTGRES_URL!);

export const db = drizzle(sql, { schema });
