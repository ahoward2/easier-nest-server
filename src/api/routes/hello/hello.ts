async function handler(req, res) {
  if (req.method === 'GET') {
    return res.json({ url: req.url });
  }
}

export const routeConfig = {
  path: '/hello',
  handler: handler,
};
