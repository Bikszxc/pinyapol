"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const prisma_1 = require("../generated/prisma");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const connectionString = `${process.env.DATABASE_URL}`;
// Ensure DATABASE_URL is defined
if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not defined in environment variables.');
    throw new Error('DATABASE_URL is not defined in environment variables.');
}
const pool = new pg_1.Pool({
    connectionString,
    max: 2 // Limit pool size to prevent "MaxClients" error on Supabase
});
const adapter = new adapter_pg_1.PrismaPg(pool);
exports.prisma = new prisma_1.PrismaClient({ adapter });
//# sourceMappingURL=prisma.js.map