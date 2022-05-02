import axios from 'axios';

async function handler(req, res) {
  if (req.method === 'GET') {
    const { data } = await axios.get(
      `https://api.github.com/users/${req.params.name}`,
    );
    return res.json(data);
  }
}

export const routeConfig = {
  path: '/hello/:name',
  handler: handler,
};
