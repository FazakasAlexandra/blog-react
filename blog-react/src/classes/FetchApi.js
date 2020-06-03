export class FetchApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    // 1. facem request la server
    // `${this.baseUrl}/posts` este la fel cu  this.baseUrl + '/posts
    const response = await fetch(this.baseUrl + '/posts', { method: 'GET' });
    const postsJson = await response.json(); // {id, title ...}[]

    // 3. returnam
    return postsJson
  }

}