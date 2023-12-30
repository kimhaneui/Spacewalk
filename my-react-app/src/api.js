import axios from 'axios';

export async function getGitHubIssues(status, sort) {
  const API_ENDPOINT = 'https://api.github.com/repos/facebook/react/issues';
  const API_VERSION = '2022-11-28';
 
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'X-GitHub-Api-Version': API_VERSION,
      },
      params:{sort,status}
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
