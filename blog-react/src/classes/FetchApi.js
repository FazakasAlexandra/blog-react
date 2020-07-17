export class FetchApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getPosts() {
    console.log(this.baseUrl)
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

  async getComments(postId) {
    const response = await fetch(`${this.baseUrl}/posts/${postId}/comments`,
    {
      method: 'GET',
      headers: {'Content-Type' : 'application/json'}
    });
    const responseJson = await response.json()

    return responseJson
  }

  async newComment(postId, comment) {
    const response = await fetch(`${this.baseUrl}/posts/${postId}/comments`, 
    {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(comment)
    })
    const responseJson = await response.json()

    return responseJson
  }

  deletePost(id) {
    fetch(`${this.baseUrl}/posts/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
  }
}