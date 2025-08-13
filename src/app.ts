import fastify from "fastify";
import { transactionsRoutes } from "./routes/transactions";
import cookie from "@fastify/cookie";

export const app = fastify();

app.register(cookie);

app.addHook("preHandler", async (request, reply) => {
  console.log(`Request received: ${request.method} ${request.url}`);
});

app.register(transactionsRoutes, {
  prefix: "/transactions",
});
