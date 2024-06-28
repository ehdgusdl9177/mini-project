export default class TweetService {
  constructor(baseURL) {
    this.baseURL = baseUrl;
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    const response = await fetch(`${baseURL}/tweets${query}`, {
      mathod: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${baseURL}/tweets`, {
      mathod: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, username: "kevin", name: "Kevin" }),
    });
    const data = await response.json();
    if (response.status !== 201) {
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(tweetId) {
    const response = await fetch(`${baseURL}/tweets/${tweetId}`, {
      mathod: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status !== 204) {
      throw new Error();
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(`${baseURL}/tweets/${tweetId}`, {
      mathod: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }
}
