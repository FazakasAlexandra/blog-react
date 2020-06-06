import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import './App.css';
import { choseClassName, choseComponent } from './switches.jsx'

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
      editPostMode: false,
      deletePostMode: false,
      newPostMode: false,
      currentPage: 'home.html'
    }
  }

  // case home.html : set all modes to default
  defaultModes() {
    if (this.state.newPostMode) {
      this.setState({ newPostMode: false })
    } else if (this.state.editMode) {
      this.setState({ editMode: false })
    } else if (this.state.deleteMode) {
      this.setState({ deleteMode: false })
    }
  }


  // handlers for sign in / sign out
  async componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    const posts = await fetchApi.getPosts();
    console.log(posts);
    this.setState({ posts: posts })

    if (userSignedIn()) {
      this.setState({ isAuth: true })
    }
  }

  handleSingIn = () => {
    console.log('worked')
    this.setState({ currentPage: 'account.html', isAuth: true })
  }

  handleSingOut = () => {
    this.setState({ currentPage: 'home.html', isAuth: false })
    removeLocalStorageItem('name', 'password')
  }


  // handlers for account buttons
  handleAccNewPost = () => {
    this.setState({ newPostMode: true, currentPage: 'new-post.html' })
  }

  handleAccEditPost = () => {
    this.setState({ editPostMode: true, currentPage: 'edit-post.html'})
  }

  handleAccDeletePostBttn = () => {
    this.setState({ deletePostMode: true, currentPage: "delete-post.html"})
  }


  // handlers for post buttons
  handleViewBttn = (post) => {
    this.setState({
      selectedPost: post,
      currentPage: 'view-post.html'
    })
  }

  handleNewPost = async (post) => {
    console.log('post button clicked')
    console.log(post)
    const fetchApi = new FetchApi('http://localhost:3000');
    const newPost = await fetchApi.newPost(post);
    console.log(newPost)
    this.displayNewPost(newPost)
  }

  displayNewPost = (newPost) => {
    console.error(newPost.id)
    let postsCopy = [...this.state.posts]
    postsCopy.push(newPost)
    this.setState({
      posts: postsCopy,
      currentPage: 'view-post.html',
      selectedPost: newPost,
      newPostMode: false,
    })
  }

  handleEditPost = (post) => {
    console.log(post.id)
    console.log('edit button clicked')
    this.setState({ editMode: true, currentPage: 'account-edit-post-id.html' })

    //this.editpost(post, post.id)
  }

  editPost = async () => {

  }

  handlePostsDeleteButton = (post) => {
    this.setState({posts: this.state.posts.filter(post => post.id != post.id)})
    this.deletePost(post.id)
  }

  deletePost(postId) {
    const fetchApi = new FetchApi('http://localhost:3000');
    fetchApi.deletePost(postId);
  }


  // chose components and section names based on current page 
  choseMainSectionClass = () => {
    let className = choseClassName(this.state)
    return className
  }

  renderView() {
    let view = choseComponent(this)
    return view
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <NavBar
            homeClickEvent={this.handleHomeSection = () => { this.setState({ currentPage: 'home.html' }) }}
            accountClickEvent={this.handleAccountSection = () => { this.setState({ currentPage: 'account.html' }) }}
            singInClickEvent={this.handleSingInSection = () => { this.setState({ currentPage: 'sing-in.html' }) }}
            signOutClickEvent={this.handleSingOut}
            isLoggedIn={this.state.isAuth}
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
