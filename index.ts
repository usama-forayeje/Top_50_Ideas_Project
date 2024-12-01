import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

const sql = neon("postgresql://neondb_owner:ImZV5H6ikNvb@ep-snowy-art-a5x9zhbr.us-east-2.aws.neon.tech/top-50-ideas-project?sslmode=require")

export const db = drizzle(sql, {schema})