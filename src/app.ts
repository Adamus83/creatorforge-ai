import Fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { healthRoutes } from "./routes/health.js";

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
      message: "API Running"
    };
  });

  await app.register(healthRoutes);

  return app;
}
