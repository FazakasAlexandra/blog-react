import React from 'react';
import './App.css';
import { FetchApi } from './classes/FetchApi'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { choseClassName, choseComponent } from './navigation.jsx'

window.addEventListener('popstate', (event) => {
  console.log(event.state)
  //this.setState({currentPage:event.state.page})
});

function userSignedIn() {
  let localName = localStorage.getItem("name")
  let localPassword = localStorage.getItem("password")

  let signedIn = checkUser(localName, localPassword)

  return signedIn
}

function checkUser(localName, localPassword) {
  let validUser = localName === 'admin' && localPassword === 'admin' ? true : false
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
      search: null,
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
  componentDidMount = async() => {
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


  // handlers for account(Acc) buttons
  handleAccNewPost = () => {
    this.setState({ newPostMode: true, currentPage: 'new-post.html' })
  }

  handleAccEditPost = () => {
    this.setState({ editPostMode: true, currentPage: 'edit-post.html'})
  }

  handleAccDeletePost = () => {
    this.setState({ deletePostMode: true, currentPage: "delete-post.html"})
    if(this.state.editPostMode){
      this.setState({editPostMode:false})
    }
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
    let postsCopy = [...this.state.posts]
    postsCopy.push(newPost)
    this.setState({
      posts: postsCopy,
      currentPage: 'view-post.html',
      selectedPost: newPost,
      newPostMode: false,
    })
  }

  displayEditForm = (post) => {
    console.error(post)
    this.setState({ 
      editMode: true, 
      selectedPost: post,
      currentPage: `edit-post-form.html`,
     }, ()=>{
      console.log(this.state)
    })
  }

  handleEditPost = async (editedPost, id) => {
    console.log(editedPost, this.state.selectedPost.id)
    let fetchApi = new FetchApi('http://localhost:3000')
    let response = await fetchApi.editPost(editedPost, this.state.selectedPost.id)
    console.log(response)
    this.displayEditedPost(response)
  }

  displayEditedPost = (response) => {
    let newPosts = this.replacePreviousPost(response)
    this.setState({
      editMode: false,
      posts: newPosts,
      selectedPost: response,
      currentPage: `view-post.html`
    })
  }

  replacePreviousPost(response) {
    let newPosts = this.state.posts.map((post)=>{
      if(post.id === response.id){
        post = response
      }
      return post
    })

    return newPosts
  }

  handleDeletePost = (selectedPost) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== selectedPost.id)}, ()=>{console.log(this.state.posts)})
    this.deletePost(selectedPost.id)
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

  search=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
    console.log(this.state.search)
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
            page ={this.state.currentPage}
            homeClickEvent={ () => this.setState({ currentPage: 'home.html' }) }
            aboutClickEvent={ () => this.setState({ currentPage: 'about.html' }) }
            accountClickEvent={ () => this.setState({ currentPage: 'account.html' }) }
            singInClickEvent={ () => this.setState({ currentPage: 'sign-in.html' }) }
            signOutClickEvent={this.handleSingOut}
            isLoggedIn={this.state.isAuth}
            search={this.search}
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
