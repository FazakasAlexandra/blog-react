import { Post } from './components/Post/Post';
import { SignInForm } from './components/Forms/SignInForm/SignInForm'
import { Account } from './components/Account/Account'
import { About } from './components/About/About'
import { NewPostForm } from './components/Forms/NewPostForm/NewPostForm'
import { EditPostForm } from './components/Forms/EditPostForm/EditPostForm'
import React from 'react'

function popState(self) {
  window.addEventListener('popstate', (event) => {
    console.log(event.state)
    self.setState({currentPage:event.state.page})
    console.log(self.state.currentPage)
  });
}

function getPostComponents(self, posts, page){
  const postComponents = posts.filter((post)=>{
    if(self.state.search === null){
      return post
    } else if(post.title.toLowerCase().includes(self.state.search.toLowerCase()) || post.text.toLowerCase().includes(self.state.search.toLowerCase())){
      return post
    }
  }).map(post => {
    return (
      <Post
        page={page}
        auth={post.author}
        key={post.id}
        post={post}
        isAuth={self.state.isAuth}
        // changes current page into 'view-post.html'
        postViewClick={self.handleViewBttn}
        postEditClick={self.displayEditForm}
        postDeleteClick={self.handleDeletePost}
        editMode={self.state.editPostMode}
        deleteMode={self.state.deletePostMode}
      ></Post>
    )
  })
  return postComponents
}

function choseClassName(state) {
  let className = ""

  switch (state.currentPage) {
    case 'home.html':
      className = 'posts'
      break

    case 'view-post.html':
      className = 'posts-view'
      break

    case 'sign-in.html':
      className = 'sign-in'
      break

    case 'account.html':
      className = 'acount-wraper'
      break

    case 'delete-post.html':
      className = 'posts-delete'
      break

    case 'edit-post.html':
      className = 'posts-edit'
      break

    case `edit-post-form.html`:
      className = `edit`
  }

  return className
}


function choseComponent(self) {

  switch (self.state.currentPage) {

    case 'home.html': {
      pushState('home.html')
      popState(self)
      self.defaultModes()
      window.history.pushState({page:'home.html'}, 'home','/home.html')
      const posts = self.state.posts
      const postComponents = getPostComponents(self,posts,'home.html')
      return postComponents
    }

    case 'view-post.html': {
      window.history.pushState('view', 'view',`/view-post-${self.state.selectedPost.id}.html`)
      return (
        <div>
          <Post
            auth={self.state.selectedPost.author}
            post={self.state.selectedPost}
            isAuth={self.state.isAuth}
            page={'view-post.html'}
          ></Post>
        </div>
      )
    }

    case 'sign-in.html': {
      pushState('sign-in.html')
      popState(self)
      return <SignInForm signIn={self.handleSingIn} />
    }

    case 'account.html': {
      pushState('account.html')
      popState(self)
      return (
        <Account
          // newPostMode -> true
          accNewPostClick={self.handleAccNewPost}
          // editPostMode -> true
          accEditPostClick={self.handleAccEditPost}
          // deletePostMode -> true
          accDeletePostClick={self.handleAccDeletePost}
        />)
    }

    case 'new-post.html': {
      pushState('new-post.html')
      popState(self)
      return (<NewPostForm 
               postNewClick={self.handleNewPost} 
               buttonName = {'Post'}
               />)
    }

    case 'edit-post.html': {
      pushState('edit-post.html')
      popState(self)
      const posts = self.state.posts
      const postComponents = getPostComponents(self, posts, 'edit-post.html')
      return postComponents;
    }

    case 'edit-post-form.html': {
      let { selectedPost : post} = self.state
      window.history.pushState({page:'edit-post-form.html'}, null , `/edit-post-${post.id}.html`)
      return (
        <EditPostForm
          title = {post.title}
          text = {post.text}
          author = {post.author}
          date = {post.date}
          new = {self.handleEditPost}
        />
      )
    }

    case 'delete-post.html': {
      pushState('delete-post.html')
      popState(self)

      const posts = self.state.posts
      const postComponents = getPostComponents(self, posts, 'delete-post.html')
      return postComponents;
    }

    case 'about.html': 
      window.history.pushState({page:'about.html'}, null ,'/about.html')

       return <About/>

  }
}

function pushState(pageName){
  window.history.pushState({page:pageName}, null ,`/${pageName}`)
}

export { choseClassName, choseComponent }