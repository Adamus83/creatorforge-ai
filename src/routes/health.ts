import { FastifyInstance } from "fastify";

export async function healthRoutes(app: FastifyInstance) {
  app.get("/health", async () => {
    return {
      success: true,
      application: "CreatorForge AI",
      version: "0.2.0",
      status: "healthy",
      uptime: process.uptime(),
      node: process.version,
      timestamp: new Date().toISOString()
    };
  });
}
