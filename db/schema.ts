import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const subscriptions = sqliteTable('subscriptions', {
 userId: text('user_id').primaryKey(),
 email: text('email').notNull(),
 consentVersion: text('consent_version').notNull(),
 createdAt: text('created_at').notNull(),
 updatedAt: text('updated_at').notNull(),
});
export const downloadTotals = sqliteTable('download_totals', {
 day: text('day').primaryKey(),
 count: integer('count').notNull().default(0),
});
