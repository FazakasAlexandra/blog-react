import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { Post } from './components/Post/Post';
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

import './App.css';
import { choseClassName, choseComponent } from'./switches.jsx'

function userSignedIn() {
  let signedIn;
  let localName = localStorage.getItem("name")
  let localPassword = localStorage.getItem("password")

  signedIn = checkUser(localName, localPassword)

  return signedIn
}

function checkUser(localName, localPassword) {
  let validUser;
  if (localName === 'admin' && localPassword === 'admin') {
    validUser = true
    console.error('true')
  }
  return validUser
}

function removeLocalStorageItem(firstKey, secKey) {
  window.localStorage.removeItem(firstKey)
  window.localStorage.removeItem(secKey)
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isAuth: false,
      editMode: false,
      deleteMode: false,
      newPostMode: false,
      postModeChange: false,
      currentPage: 'home.html'
    }
  }

  async componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    const posts = await fetchApi.getPosts();
    console.log(posts);
    this.setState({ posts: posts })

    if (userSignedIn()) {
      this.setState({ isAuth: true })
    }
  }

  handleViewButton = (post) => {
    console.log('view post', post);
    this.setState({
      selectedPost: post,
      currentPage: 'view-post.html'
    })
  }

  handleHomeSection = () => {
    console.log('s-a dat click')
    this.setState({ currentPage: 'home.html' })
  }

  handleAccountEditButton = () => {
    this.setState({ editMode: true, currentPage: 'edit-post-section-one.html', }, () => {
      console.log(this.state.editMode)
      console.log(this.state)
    })
  }

  handleEditButton = (post) => {
    console.log(post.id)
    console.log('edit button clicked')
    this.setState({editMode: true, currentPage: 'edit-post-section-two.html'})

    //this.editpost(post, post.id)
  }

  editPost = async () => {

  }

  handleSingInSection = () => {
    this.setState({ currentPage: 'sing-in.html' })
  }

  handleAccountSection = () => {
    this.setState({ currentPage: 'account.html' })
  }

  handleSingIn = () => {
    console.log('worked')
    this.setState({ currentPage: 'account.html', isAuth: true })
  }

  handlePostButton = () => {
    this.setState({ newPostMode: true, currentPage: 'create-post.html' })
  }

  handleSingOut = () => {
    this.setState({ currentPage: 'home.html', isAuth: false })
    removeLocalStorageItem('name', 'password')
  }

  handleDeleteButton = () => {
    console.log('delete clicked')
    this.setState({ currentPage: "delete-post.html", deleteMode: true })
  }

  handlePostsDeleteButton = (post) => {
    console.log('hello')
    console.log(post.id)
    this.deletePost(post.id)
  }

  deletePost(postId) {
    const fetchApi = new FetchApi('http://localhost:3000');
    fetchApi.delete(postId);
    this.setState({
      posts: this.state.posts.filter(post => post.id != postId)
    })
  }

  handlePostFormButton = async (post) => {
    console.log('post button clicked')
    console.log(post)
    const fetchApi = new FetchApi('http://localhost:3000');
    const newPost = await fetchApi.sendPost(post);
    console.log(newPost)
    this.displayNewPost(newPost)
  }

  displayNewPost = (newPost) => {
    console.error(newPost.id)
    let postsCopy = [...this.state.posts]
    postsCopy.push(newPost)
    this.setState ({
      posts: postsCopy,
      currentPage: 'view-post.html',
      selectedPost: newPost,
      newPostMode: false,
    })
  }

  cancelStateModes() {
    if (this.state.newPostMode) {
      this.setState({ newPostMode: false })
    } else if (this.state.editMode) {
      this.setState({ editMode: false })
    } else if (this.state.deleteMode) {
      this.setState({ deleteMode: false })
    }
  }

  renderView() {
    let view = choseComponent(this)
    return view
  }

  isLoggedInView() {
    if (this.state.isAuth) {
      return (
        <div>
          <Post
            auth={this.author}
            post={this.state.selectedPost}
            isSingle={true}
            isAuth={true}
            page={this.state.currentPage}
            deleteMode={this.state.deleteMode}
          ></Post>
        </div>
      )
    } else {
      return (
        <div>
          <Post
            auth={this.author}
            post={this.state.selectedPost}
            isSingle={true}
            page={this.state.currentPage}
          ></Post>
        </div>
      )
    }
  }

  choseMainSectionClass() {
    let className = choseClassName(this.state)

    return className
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <NavBar
            homeClickEvent={this.handleHomeSection}
            isLoggedIn={this.state.isAuth}
            accountClickEvent={this.handleAccountSection}
            singInClickEvent={this.handleSingInSection}
            signOutClickEvent={this.handleSingOut}
          />
        </React.Fragment>
        <div className={this.choseMainSectionClass()}>
          {this.renderView()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
