import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as authSchema from './schemas/auth';
import dotenv from 'dotenv';

dotenv.config({ path: ['.env.local', '.env'] });

// Set your Neon connection string in the environment variable POSTGRES_URL
const sql = neon(process.env.POSTGRES_URL!);

export const db = drizzle(sql, { schema: { ...authSchema } });
