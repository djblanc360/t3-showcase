import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres"

import * as schema from "./schema";

// use object to send to drizzle queries to DB
export const db = drizzle(sql, { schema});
