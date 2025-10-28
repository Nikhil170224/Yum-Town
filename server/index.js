// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();
// // Target Swiggy API
// const SWIGGY_TARGET = 'https://www.swiggy.com';
// app.use(
//   '/api',
//   createProxyMiddleware({
//     target: 'https://www.swiggy.com',
//     changeOrigin: true,
//     secure: true,
//     pathRewrite: {
//       '^/api': '/mapi'
//     },
//     onProxyReq: (proxyReq, req, res) => {
//       proxyReq.setHeader(
//         'User-Agent',
//         'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
//       );
//       proxyReq.setHeader('referer', 'https://www.swiggy.com/');
//       proxyReq.setHeader('origin', 'https://www.swiggy.com');
//     },
//     onError: (err, req, res) => {
//       console.error('Proxy Error:', err);
//       res.status(500).json({ error: 'Proxy failed' });
//     }
//   })
// );
// // Proxy everything else to Parcel dev server
// app.use(
//   '/',
//   createProxyMiddleware({
//     target: 'http://localhost:1234',
//     changeOrigin: true,
//     ws: true
//   })
// );
// app.listen(5000, () => {
//   console.log('✅ Proxy server running at http://localhost:5000');
//   console.log('📦 Parcel running at http://localhost:1234');
// });

