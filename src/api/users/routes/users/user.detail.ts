import axios from 'axios';

/**
 * Aggregates fetches from multiple API endpoints about
 * a user's details.
 */
async function handler(req, res) {
  if (req.method === 'GET') {
    const { github /*gitlab*/ } = req.query ?? {};

    const { data: githubData } = await axios.get(
      `https://api.github.com/users/${github}`,
    );

    // const { data: gitlabData } = await axios.get(
    //   `https://gitlab.com/api/v4/users/${gitlab}`,
    // );
    return res.json([githubData /*gitlabData*/]);
  }
}

export const RouteConfig = {
  path: '/detail',
  handler,
};
