import { serial, pgTable, varchar, integer, } from "drizzle-orm/pg-core";

// Define the "ideas" table schema
export const Ideas = pgTable("ideas", {
  id: serial("id").primaryKey(), // Auto-incrementing primary key
  content: varchar("content", { length: 500 }).notNull(), // Limited to 500 characters
  username: varchar("username", { length: 100 }).notNull(), // Limited to 100 characters
  vote: integer("vote").default(0).notNull(), // Default 0 for votes
  createdAt: varchar("createdAt").notNull(), // Auto-generate current timestamp
});

// Define the TypeScript type for the table
export type Idea = {
  id: number; // Corresponds to the "id" column
  content: string; // Corresponds to the "content" column
  username: string; // Corresponds to the "username" column
  createdAt: Date; // Corresponds to the "createdAt" column
};
vote: number; // Corresponds to the "vote" column
