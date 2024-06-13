const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('Setting up proxy...');

module.exports = function (app) {
  app.use(
    '/api',
      (req, res, next) => {
        console.log(`Proxying request: ${req.method} ${req.url}`);
        next();
      },
    createProxyMiddleware({
      target: 'http://localhost:8030/api',
      changeOrigin: true,
    })
  );
};