async function handler(req, res) {
  res.send('Request param from handler: ' + req.params.name);
}

export const routeConfig = {
  path: '/hello/:name',
  handler: handler,
};
