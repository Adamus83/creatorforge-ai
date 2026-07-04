import dotenv from "dotenv";
import { buildApp } from "./app.js";

dotenv.config();

const PORT = Number(process.env.PORT ?? 3000);
const HOST = process.env.HOST ?? "0.0.0.0";

async function start() {
  const app = await buildApp();

  try {
    await app.listen({
      host: HOST,
      port: PORT,
    });

    console.log(`🚀 CreatorForge AI running on http://${HOST}:${PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
