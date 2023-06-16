import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const router = new Router();
const port = parseInt(process.env.PORT ?? "3000");

router.get("/", (ctx) => {
  ctx.body = "/";
});

router.get("/health", (ctx) => {
  ctx.body = "OK";
});

app.use(router.routes());
app.listen({ port }, () => {
  console.log(`Server is ready at http://localhost:${port}`);
});
