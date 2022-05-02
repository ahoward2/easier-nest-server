async function handler(req, res) {
  if (req.method === 'GET') {
    return res.json({ message: `Hello ${req.params.name}!` });
  }
}

export const routeConfig = {
  path: '/hello/:name',
  handler: handler,
};
