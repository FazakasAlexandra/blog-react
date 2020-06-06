export class FetchApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    const response = await fetch(this.baseUrl + '/posts', { method: 'GET' });
    const postsJson = await response.json(); // {id, title ...}[]

    return postsJson
  }

  async newPost(post) {
    const response = await fetch(this.baseUrl + '/posts', { 
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    });
    const responseJson = await response.json();
    console.log(responseJson)
    return responseJson
  }

  async editPost(post, id) {
    const response = await fetch(`${this.baseUrl}/posts/${id}`, {
      method: 'PUT',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(post)
    });
    const responseJson = await response.json()
    console.log(responseJson)
    return responseJson
  }

  deletePost(id) {
    fetch(`${this.baseUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
  }
}