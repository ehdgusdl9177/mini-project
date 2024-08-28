export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  async getTweets(username) {
    const query = username ? `?username=${username}` : "";
    return this.http.fetch(`/tweets${query}`, {
      mathod: "GET",
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/tweets`, {
      mathod: "POST",
      body: JSON.stringify({ text, username: "kevin", name: "Kevin" }),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      mathod: "DELETE",
    });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      mathod: "PUT",
      body: JSON.stringify({ text }),
    });
  }
}
