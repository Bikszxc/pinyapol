import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = `${process.env.DATABASE_URL}`;

// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined in environment variables.');
    throw new Error('DATABASE_URL is not defined in environment variables.');
}

const pool = new Pool({ 
    connectionString,
    max: 2 // Limit pool size to prevent "MaxClients" error on Supabase
});
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
