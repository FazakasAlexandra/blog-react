import React from 'react';
import { FetchApi } from './classes/FetchApi'
import { Post } from './components/Post/Post';
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isAuth: false,
      editMode: false,
      currentPage: 'home.html'
    }
  }

  async componentDidMount() {
    const fetchApi = new FetchApi('http://localhost:3000');
    const posts = await fetchApi.getPosts();
    console.log(posts);
    this.setState({ posts: posts })
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
    console.log('account page')
  }

  signInButtonHandler = () => {
    console.log('sign in button clicked')
  }

  renderView() {
    switch (this.state.currentPage) {
      case 'home.html': {
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
          signInButtonClick={this.signInButtonHandler}
        />
      }
    }
  }

  isLoggedInView() {
    if (this.state.isAuth) {
      return (
        <div>
          <Post
            //style={{ alignSelf: 'center' }}
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
            //style={{ selfAlign: 'center' }}
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
    }

    return className
  }
  render() {
    console.log(this.renderView())
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
