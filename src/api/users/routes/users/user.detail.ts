import axios from 'axios';

/**
 * Aggregates fetches from multiple API endpoints about
 * a user's details.
 */
async function handler(req, res) {
  if (req.method === 'GET') {
    const { github, gitlab } = req.query ?? {};

    // Make Concurrent API calls
    axios
      .all([
        axios.get(`https://api.github.com/users/${github}`),
        axios.get(`https://gitlab.com/api/v4/users?username=${gitlab}`),
      ])
      .then(
        axios.spread((githubData, gitlabData) => {
          res.json({
            github: githubData.data,
            gitlab: gitlabData.data,
          });
        }),
      )
      .catch((error) => {
        console.error(error);
      });
  }
}

export const RouteConfig = {
  path: '/detail',
  handler,
};
