import fastify from "fastify";
import { knex } from "./database";
import { env } from "./env";
import { transactionsRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie";
// import crypto from "node:crypto";

const app = fastify();

app.register(cookie);

app.addHook("preHandler", async (request, reply) => {
  console.log(`Request received: ${request.method} ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: "/transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  });
