import { Form } from './components/Form/Form'
import { Account } from './components/Account/Account'
import { PostForm } from './components/PostForm/PostForm'
import { Post } from './components/Post/Post';
import React from 'react'

function choseClassName(state){
    let className = ""
    switch (state.currentPage) {
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
      case 'delete-post.html':
        className = 'posts-delete'
        break
      case 'edit-post-section-one.html':
        className = 'posts-edit'
        break
    }
    
    return className
}

function choseComponent(self){
  switch (self.state.currentPage) {
    case 'home.html': {
      self.cancelStateModes()
      const posts = self.state.posts
      const postCmps = posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            onViewButtonClick={self.handleViewButton}
            isSingle={self}
            page={self.state.currentPage}
            deleteMode={self.state.deleteMode}
          ></Post>
        )
      })
      return postCmps;
    }

    case 'edit-post-section-one.html': {
      const posts = self.state.posts
      const postCmps = posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            onEditButtonClick={self.handleEditButton}
            isSingle={self}
            page={self.state.currentPage}
            editMode={self.state.editMode}
          ></Post>
        )
      })
      return postCmps;
    }

  case 'edit-post-section-two.html': {
    return <h3>Edit form comes here</h3>
  }

    case 'delete-post.html': {
      const posts = self.state.posts
      const postCmps = posts.map(post => {
        return (
          <Post
            key={post.id}
            post={post}
            onDeleteButtonClick={self.handlePostsDeleteButton}
            isSingle={false}
            auth={post.author}
            page={self.state.currentPage}
            deleteMode={self.state.deleteMode}
          ></Post>
        )
      })
      return postCmps;
    }

    case 'view-post.html': {
      return self.isLoggedInView()
    }

    case 'sing-in.html': {
      return <Form singIn={self.handleSingIn}/>
    }

    case 'account.html': {
      return (
      <Account
        postClickEvent={self.handlePostButton}
        editClickEvent={self.handleAccountEditButton}
        deleteClickEvent={self.handleDeleteButton}
      />)
    }

    case 'create-post.html': {
      return ( <PostForm postFormClickEvent={self.handlePostFormButton}/> )
    }
  }
  
}

export {choseClassName, choseComponent}