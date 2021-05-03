var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  // your get route handling
  ctx.body = '<h1>index sayfasına hoşgeldiniz</h1>';
});
router.get('/hakkimda', (ctx, next) => {
    // your get route handling
    ctx.body = '<h1>hakkimda sayfasına hoşgeldiniz</h1>';
});
router.get('/iletisim', (ctx, next) => {
    // your get route handling
    ctx.body = '<h1>iletisim sayfasına hoşgeldiniz</h1>';
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);