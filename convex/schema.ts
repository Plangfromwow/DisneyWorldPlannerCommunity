import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    avatarUrl: v.optional(v.string()),
    role: v.union(v.literal("user"), v.literal("admin")),
  }).index("by_email", ["email"]),

  trips: defineTable({
    userId: v.id("users"),
    name: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    partySize: v.number(),
  }).index("by_user", ["userId"]),

  tripDays: defineTable({
    tripId: v.id("trips"),
    date: v.string(),
  }).index("by_trip", ["tripId"]),

  tripItems: defineTable({
    tripDayId: v.id("tripDays"),
    type: v.union(
      v.literal("attraction"),
      v.literal("dining"),
      v.literal("note"),
    ),
    title: v.string(),
    notes: v.optional(v.string()),
    order: v.number(),
  }).index("by_day", ["tripDayId"]),

  deals: defineTable({
    title: v.string(),
    description: v.string(),
    link: v.string(),
    expiryDate: v.optional(v.string()),
    isExpired: v.boolean(),
  }),

  blogPosts: defineTable({
    authorId: v.id("users"),
    title: v.string(),
    slug: v.string(),
    body: v.string(),
    coverImageUrl: v.optional(v.string()),
    tags: v.array(v.string()),
    publishedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_author", ["authorId"]),

  news: defineTable({
    title: v.string(),
    excerpt: v.string(),
    imageUrl: v.optional(v.string()),
    sourceUrl: v.string(),
    publishedAt: v.number(),
  }),
});
