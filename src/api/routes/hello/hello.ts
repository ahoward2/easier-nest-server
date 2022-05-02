async function handler(req, res) {
  res.send('Request url from handler: ' + req.url);
}

export const routeConfig = {
  path: '/hello',
  handler: handler,
};
