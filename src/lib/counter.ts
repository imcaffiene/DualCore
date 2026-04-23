import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function incrementVisits(): Promise<number> {
  return await redis.incr("site:visits");
}

export async function getVisitCount(): Promise<number> {
  const count = await redis.get<number>("site:visits");
  return count ?? 0;
}

export async function resetVisits(): Promise<number> {
  await redis.set("site:visits", 0);
  return 0;
}
