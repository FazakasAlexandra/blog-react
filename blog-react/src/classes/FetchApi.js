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

  async sendPost(post) {
    const response = await fetch(this.baseUrl + '/posts', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    });
    const responseJson = await response.json();
    console.log(responseJson)
    return responseJson
  }

  delete(id) {
    fetch(`${this.baseUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
  }
}