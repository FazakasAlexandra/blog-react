import { Post } from './components/Post/Post';
import { SignInForm } from './components/Forms/SignInForm/SignInForm'
import { Account } from './components/Account/Account'
import { NewPostForm } from './components/Forms/NewPostForm/NewPostForm'
import { EditPostForm } from './components/Forms/EditPostForm/EditPostForm'
import React from 'react'

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
      self.defaultModes()
      const posts = self.state.posts
      const postComponents = posts.map(post => {
        return (
          <Post
            page={'home.html'}
            auth={post.author}
            key={post.id}
            post={post}
            // changes current page into 'view-post.html'
            postViewClick={self.handleViewBttn}
          ></Post>
        )
      })
      return postComponents
    }

    case 'view-post.html': {
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
      return <SignInForm signIn={self.handleSingIn} />
    }

    case 'account.html': {
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
      return (<NewPostForm 
               postNewClick={self.handleNewPost} 
               buttonName = {'Post'}
               />)
    }

    case 'edit-post.html': {
      const posts = self.state.posts
      const postComponents = posts.map(post => {
        return (
          <Post
            auth={post.author}
            key={post.id}
            post={post}
            postEditClick={self.displayEditForm}
            page={'edit-post.html'}
            editMode={self.state.editPostMode}
          ></Post>
        )
      })
      return postComponents;
    }

    case `edit-post-form.html`: {
      let { selectedPost : post} = self.state
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
      const posts = self.state.posts
      const postComponents = posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            postDeleteClick={self.handleDeletePost}
            auth={post.author}
            page={'delete-post.html'}
            deleteMode={self.state.deletePostMode}
          ></Post>
        )
      })
      return postComponents;
    }
  }

}

export { choseClassName, choseComponent }