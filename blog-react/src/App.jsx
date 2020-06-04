import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { Post } from './components/Post/Post';
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import { Account } from './components/Account/Account'
import { PostForm } from './components/PostForm/PostForm' 
import './App.css';

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isAuth: false,
      editMode: false,
      newPostMode: false,
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

  handleEditButton = () => {
    this.setState({ editMode: true })
    console.log(this.state.editMode)
    console.log(this.state.selectedPost)
  }

  handleSingInSection = () => {
    this.setState({ currentPage: 'sing-in.html' })
  }

  handleAccountSection = () => {
    this.setState({ currentPage: 'account.html' })
  }

  signInButtonHandler = () => {
    console.log('sign in button clicked')
  }

  handleSingIn = () => {
    console.log('worked')
    this.setState({ currentPage: 'account.html', isAuth: true })
  }

  handlePostButton = () => {
    this.setState({newPostMode: true})
  }

  async handlePostFormButton(post){
    console.log('post button clicked')
    console.log(post) 
    const fetchApi = new FetchApi('http://localhost:3000');
    const newPost = await fetchApi.postPost(post);
    console.log(newPost)
  }

  changeStateMods(){
    if(this.state.newPostMode){
      this.setState({newPostMode: false})
    } else if(this.state.editMode){
      this.setState({editMode: false})
    } else if(this.state.deleteMode){
      this.setState({deleteMode: false})
    }
  }

  renderView() {
    switch (this.state.currentPage) {
      case 'home.html': {
        this.changeStateMods()
        const posts = this.state.posts
        const postCmps = posts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              onViewButtonClick={this.handleViewButton}
              isSingle={false}
            ></Post>
          )
        })
        return postCmps;
      }
      case 'view-post.html': {
        return this.isLoggedInView()

      }
      case 'sing-in.html': {
        return <Form
          singIn={this.handleSingIn}
        />
      }
      case 'account.html': {
        console.log('account.html')
        if(this.state.newPostMode){
          return (<PostForm
            postFormClickEvent={this.handlePostFormButton}/>)
        } else {
        return (<Account
          postClickEvent={this.handlePostButton}
          editClickEvent={this.handleEditButton}
          deleteClickEvent={this.handleDeleteButton}
        />)
        }

      }
    }
  }

  isLoggedInView() {
    if (this.state.isAuth) {
      return (
        <div>
          <Post
            post={this.state.selectedPost}
            isSingle={true}
            isAuth={true}
            onEditButtonClick={() => this.handleEditButton(this.state.selectedPost)}
          ></Post>
        </div>
      )
    } else {
      return (
        <div>
          <Post
            post={this.state.selectedPost}
            isSingle={true}
          ></Post>
        </div>
      )
    }
  }

  choseMainSectionClass() {
    let className = ""
    switch (this.state.currentPage) {
      case 'home.html':
        className = 'posts'
        break
      case 'view-post.html':
        className = 'posts-view'
        break
      case 'sing-in.html':
        className = 'sing-in'
        break
      case 'account.html':
        className = 'acount-wraper'
        break
    }

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
