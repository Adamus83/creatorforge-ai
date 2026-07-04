import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: true,
  });

  await app.register(cors);

  app.get("/", async () => {
    return {
      success: true,
      application: "CreatorForge AI",
      version: "0.2.0",
      status: "running",
    };
  });

  app.get("/health", async () => {
    return {
      success: true,
      status: "healthy",
      uptime: process.uptime(),
      node: process.version,
      timestamp: new Date().toISOString(),
    };
  });

  return app;
}
