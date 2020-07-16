(this["webpackJsonpblog-react"]=this["webpackJsonpblog-react"]||[]).push([[0],{124:function(e,t,n){e.exports=n(401)},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},135:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},394:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(23),r=n.n(o),i=(n(128),n(52)),c=n(3),l=n.n(c),u=n(12),m=n(8),p=n(9),d=n(11),h=n(10),f=(n(129),function(){function e(t){Object(m.a)(this,e),this.baseUrl=t}return Object(p.a)(e,[{key:"getPosts",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/posts",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"newPost",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.baseUrl+"/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,console.log(a),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"editPost",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/posts/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,console.log(s),e.abrupt("return",s);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getComments",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/posts/").concat(t,"/comments"),{method:"GET",headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"newComment",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.baseUrl,"/posts/").concat(t,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 2:return a=e.sent,e.next=5,a.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deletePost",value:function(e){fetch("".concat(this.baseUrl,"/posts/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}})}}]),e}()),v=(n(130),n(45)),g=n(21),E=n(119);v.b.add(g.d,g.j,g.c,E.a,g.e,g.b,g.i,g.f,g.g,g.a,g.h);var w=n(4);n(135);function b(e){return s.a.createElement("span",{id:"serach-container"},s.a.createElement("input",{type:"text",id:"search-bar",placeholder:"Search...",onChange:function(t){return e.search(t)}}),s.a.createElement(w.a,{icon:"search"}))}n(136);var k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).smallView=function(){var e=a.props.isLoggedIn?a.props.accountClickEvent:a.props.singInClickEvent,t={display:a.state.viewMenu?"block":"none"};return s.a.createElement("div",{id:"li-wraper-small",style:t},s.a.createElement("li",{id:"one",onClick:function(){return a.props.homeClickEvent()}},"Home"),s.a.createElement("li",{id:"two",onClick:function(){return a.props.aboutClickEvent()}},"About"),s.a.createElement("li",{id:"three",onClick:function(){return e()}},s.a.createElement("span",null,a.props.isLoggedIn?"Account":"Sign in")),s.a.createElement("li",{id:"four",onClick:function(){return a.props.signOutClickEvent()}},s.a.createElement("span",null,a.props.isLoggedIn?"Sign out":null)),a.showSeachBar(),s.a.createElement(w.a,{icon:"times",id:"close-menu",onClick:function(){return a.setState({viewMenu:!1})}}))},a.state={viewMenu:!1},a}return Object(p.a)(n,[{key:"showSeachBar",value:function(){switch(this.props.page){case"home.html":case"edit-post.html":case"delete-post.html":return s.a.createElement(b,{search:this.props.search});default:return null}}},{key:"render",value:function(){var e=this,t=(this.state.viewMenu,s.a.createElement(s.a.Fragment,null," ",s.a.createElement(w.a,{icon:"user"}),s.a.createElement("span",null," Account")," ")),n=this.props.isLoggedIn?this.props.accountClickEvent:this.props.singInClickEvent;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"nav-bar",style:"account.html"===this.props.page?{paddingBottom:"0.9rem"}:null},s.a.createElement("div",{id:"li-wraper"},s.a.createElement("li",{id:"one",onClick:function(){return e.props.homeClickEvent()}},s.a.createElement(w.a,{icon:"home"}),s.a.createElement("span",null," Home")),s.a.createElement("li",{id:"two",onClick:function(){return e.props.aboutClickEvent()}},s.a.createElement("span",null,"About")),s.a.createElement("li",{id:"three",onClick:function(){return n()}},s.a.createElement("span",null,this.props.isLoggedIn?t:"Sign in")),this.showSeachBar(),s.a.createElement("li",{id:"four",onClick:function(){return e.props.signOutClickEvent()}},s.a.createElement("span",null,this.props.isLoggedIn?"Sign out":null))),s.a.createElement(w.a,{icon:"bars",id:"bars",onClick:function(){e.setState({viewMenu:!0})}}),this.state.viewMenu?this.smallView():null))}}]),n}(s.a.Component);n(392);function C(){return s.a.createElement("div",{className:"contact"},s.a.createElement("h3",null,"Contact"),s.a.createElement("div",{className:"email-wraper"},s.a.createElement(w.a,{icon:"envelope"}),s.a.createElement("p",null,"pigeon.bloger@gmail.com")),s.a.createElement("div",{className:"social-media-contact"},s.a.createElement(w.a,{icon:["fab","facebook"]}),s.a.createElement(w.a,{icon:["fab","twitter"]}),s.a.createElement(w.a,{icon:["fab","youtube"]})))}n(393),n(394);function y(e){return s.a.createElement("div",{className:"comment"},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/702/702756.svg"}),s.a.createElement("div",{className:"comment-text"},s.a.createElement("p",{style:{fontSize:"1.3rem"}},e.user),s.a.createElement("p",{style:{fontSize:"0.9rem"}},e.text),s.a.createElement("p",{style:{fontSize:"0.7rem",marginTop:"1rem"}},e.date)))}var P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).newPostComment=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),n=new f("http://localhost:3000"),e.next=4,n.newComment(a.props.post.id,t);case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleCommentClick=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.isAuth?"admin":document.getElementById("comment-user").value,console.log(n),s=document.getElementById("comment-textarea").value,e.next=5,a.newPostComment({user:n,text:s});case 5:o=e.sent,a.setState({comments:[].concat(Object(i.a)(a.state.comments),[o])});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={comments:[]},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new f("http://localhost:3000"),e.next=3,t.getComments(this.props.post.id);case 3:n=e.sent,this.setState({comments:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"choseButton",value:function(){var e,t=this;return"home.html"===this.props.page?e=s.a.createElement("button",{onClick:function(){return t.props.postViewClick(t.props.post)}},"View"):this.props.editMode?e=s.a.createElement("button",{onClick:function(){return t.props.postEditClick(t.props.post)},className:"edit-button"},"Edit"):this.props.deleteMode&&(e=s.a.createElement("button",{onClick:function(){return t.props.postDeleteClick(t.props.post)},className:"delete-button"},s.a.createElement(w.a,{icon:"trash-alt",id:"trash-icon"}))),e}},{key:"choseTextLength",value:function(){var e=s.a.createElement("p",{className:"post-text"},this.props.post.text.substring(0,100),"..."),t=s.a.createElement("p",{className:"post-text-view"},this.props.post.text);return"home.html"===this.props.page||"delete-post.html"===this.props.page||"edit-post.html"===this.props.page?e:t}},{key:"getCommentComponents",value:function(){return console.log(this.state.comments),this.state.comments.map((function(e){return s.a.createElement(y,{user:e.user,text:e.text,date:e.date})}))}},{key:"getCommentSection",value:function(){var e=this.getCommentComponents();return s.a.createElement("div",{className:"comment-section-wraper"},s.a.createElement("div",{className:"comments-wraper"},e))}},{key:"isViewPost",value:function(){if("view-post.html"===this.props.page)return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"new-comment-section"},this.props.isAuth?null:s.a.createElement("input",{type:"text",id:"comment-user",placeholder:"Name"}),s.a.createElement("div",{className:"textarea-container"},s.a.createElement("textarea",{id:"comment-textarea"}),s.a.createElement(w.a,{icon:"plus-square",id:"add-comment-icon",onClick:this.handleCommentClick}))),this.getCommentSection())}},{key:"render",value:function(){var e=this.isViewPost(),t=this.choseButton();return s.a.createElement("div",{className:"post"},s.a.createElement("img",{src:"Alexandra"===this.props.auth?"https://image.flaticon.com/icons/svg/1196/1196498.svg":"https://image.flaticon.com/icons/png/512/2983/2983660.png"}),s.a.createElement("h3",null,this.props.post.title),this.choseTextLength(),e,t)}}]),n}(s.a.Component);n(395),n(396),n(397);var S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,s=t.value;switch(n){case"name":a.setState({name:s}),a.setState({nameClass:"sign-in-form-user"});break;case"password":a.setState({password:s}),a.setState({passClass:"sign-in-form-pass"})}},a.handleSignIn=function(){var e,t,n=a.checkErrors();n&&(a.setState({signedIn:!0},(function(){a.props.signIn(a.state.signedIn)})),console.log("succesfully signed in!"),e=a.state.password,t=a.state.name,localStorage.setItem("name",e),localStorage.setItem("password",t)),console.log(n)},a.state={nameClass:"sign-in-form-user",passClass:"sign-in-form-pass",name:"",password:"",nameError:"",passwordError:"",signedIn:!1},a}return Object(p.a)(n,[{key:"checkErrors",value:function(){var e=this,t=!0,n=this.state,a=n.name,s=n.password;return"admin"!==a&&"admin"!==s||""===a&&""===s?(console.error("no admin"),this.setState({nameError:this.state.name,nameClass:"sign-in-form-user-invalid"}),this.setState({passwordError:this.state.password,passClass:"sign-in-form-pass-invalid"},(function(){console.log(e.state.nameError)})),t=!1):"admin"!==s?(this.setState({passwordError:this.state.password,passClass:"sign-in-form-pass-invalid"},(function(){console.log(e.state.passwordError)})),t=!1):"admin"!==a&&(this.setState({nameError:this.state.name,nameClass:"sign-in-form-user-invalid"},(function(){console.log(e.state.nameError)})),t=!1),t}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"sign-in-form-wraper"},s.a.createElement("form",{className:"sign-in-form"},s.a.createElement("div",{className:this.state.nameClass},s.a.createElement(w.a,{icon:"user",id:"".concat(this.state.nameClass,"-icon")}),s.a.createElement("input",{type:"text",name:"name",placeholder:"name",value:this.state.name,onChange:this.handleChange})),s.a.createElement("div",{className:this.state.passClass},s.a.createElement(w.a,{icon:"key",id:"".concat(this.state.passClass,"-icon")}),s.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange})),s.a.createElement("button",{type:"button",onClick:function(){return e.handleSignIn()}},"Sign in")),s.a.createElement("div",{className:"sign-in-form-image"},s.a.createElement("img",{src:"https://image.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"})))}}]),n}(s.a.Component);n(398);function x(e){return s.a.createElement("div",{className:"account"},s.a.createElement("div",{className:"user-image"},s.a.createElement("div",{className:"controls"},s.a.createElement("button",{id:"new-post",onClick:function(){return e.accNewPostClick()}},s.a.createElement(w.a,{icon:"plus-square"})," Post"),s.a.createElement("button",{id:"edit-post",onClick:function(){return e.accEditPostClick()}},s.a.createElement(w.a,{icon:"edit"})," Edit"),s.a.createElement("button",{id:"delete-post",onClick:function(){return e.accDeletePostClick()}},s.a.createElement(w.a,{icon:"trash-alt"})," Delete"))))}n(399);function j(){return s.a.createElement("div",{className:"about"},s.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1196/1196498.svg"}),s.a.createElement("h3",null,"Join our pigeon team today!"),s.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),s.a.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"))}var q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).getInputs=function(){var e=document.getElementById("title-input").value,t=document.getElementById("author-input").value,n={title:""===e?"No title":e,author:""===t?"Anonymous":t,date:document.getElementById("date-input").value,text:document.getElementById("text-input").value};a.props.formClickEvent(n)},a}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"post-form"},s.a.createElement("div",{className:"top-wraper"},s.a.createElement("div",{className:"top-input-wraper"},s.a.createElement("label",{htmlFor:"title",id:"title"}," Title"),s.a.createElement("input",{type:"text",name:"title",id:"title-input",defaultValue:this.props.title})),s.a.createElement("div",{className:"top-input-wraper"},s.a.createElement("label",{htmlFor:"author"}," Author "),s.a.createElement("input",{type:"text",name:"author",id:"author-input",defaultValue:this.props.author})),s.a.createElement("div",{className:"top-input-wraper",id:"no-left-padding"},s.a.createElement("label",{htmlFor:"date"}," Date "),s.a.createElement("input",{type:"text",id:"date-input",defaultValue:this.props.date}))),s.a.createElement("textarea",{type:"text",name:"text",id:"text-input",defaultValue:this.props.text}),s.a.createElement("button",{onClick:function(t){return e.getInputs(t.target)},type:"button"},s.a.createElement("span",null," ",this.props.buttonName," ")))}}]),n}(s.a.Component),N=(n(400),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement(q,{title:this.props.title,author:this.props.author,text:this.props.text,buttonName:"Post",formClickEvent:this.props.postNewClick})}}]),n}(s.a.Component)),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(m.a)(this,n),t.call(this,e)}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement(q,{title:this.props.title,author:this.props.author,date:this.props.date,text:this.props.text,buttonName:"Submit",formClickEvent:this.props.new})}}]),n}(s.a.Component);function M(e,t,n){return t.filter((function(t){return null===e.state.search||t.title.toLowerCase().includes(e.state.search.toLowerCase())||t.text.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).map((function(t){return s.a.createElement(P,{page:n,auth:t.author,key:t.id,post:t,isAuth:e.state.isAuth,postViewClick:e.handleViewBttn,postEditClick:e.displayEditForm,postDeleteClick:e.handleDeletePost,editMode:e.state.editPostMode,deleteMode:e.state.deletePostMode})}))}function I(e){window.history.pushState({page:e},null,"/".concat(e))}var A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).componentDidMount=Object(u.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new f("http://localhost:3000"),t.next=3,n.getPosts();case 3:a=t.sent,console.log(a),e.setState({posts:a}),s=localStorage.getItem("name"),o=localStorage.getItem("password"),"admin"===s&&"admin"===o&&e.setState({isAuth:!0});case 7:case"end":return t.stop()}var s,o}),t)}))),e.handleSingIn=function(){console.log("worked"),e.setState({currentPage:"account.html",isAuth:!0})},e.handleSingOut=function(){var t,n;e.setState({currentPage:"home.html",isAuth:!1}),t="name",n="password",window.localStorage.removeItem(t),window.localStorage.removeItem(n)},e.handleAccNewPost=function(){e.setState({newPostMode:!0,currentPage:"new-post.html"})},e.handleAccEditPost=function(){e.setState({editPostMode:!0,currentPage:"edit-post.html"})},e.handleAccDeletePost=function(){e.setState({deletePostMode:!0,currentPage:"delete-post.html"}),e.state.editPostMode&&e.setState({editPostMode:!1})},e.handleViewBttn=function(t){e.setState({selectedPost:t,currentPage:"view-post.html"})},e.handleNewPost=function(){var t=Object(u.a)(l.a.mark((function t(n){var a,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("post button clicked"),console.log(n),a=new f("http://localhost:3000"),t.next=5,a.newPost(n);case 5:s=t.sent,console.log(s),e.displayNewPost(s);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.displayNewPost=function(t){var n=Object(i.a)(e.state.posts);n.push(t),e.setState({posts:n,currentPage:"view-post.html",selectedPost:t,newPostMode:!1})},e.displayEditForm=function(t){console.error(t),e.setState({editMode:!0,selectedPost:t,currentPage:"edit-post-form.html"},(function(){console.log(e.state)}))},e.handleEditPost=function(){var t=Object(u.a)(l.a.mark((function t(n,a){var s,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n,e.state.selectedPost.id),s=new f("http://localhost:3000"),t.next=4,s.editPost(n,e.state.selectedPost.id);case 4:o=t.sent,console.log(o),e.displayEditedPost(o);case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.displayEditedPost=function(t){var n=e.replacePreviousPost(t);e.setState({editMode:!1,posts:n,selectedPost:t,currentPage:"view-post.html"})},e.handleDeletePost=function(t){e.setState({posts:e.state.posts.filter((function(e){return e.id!==t.id}))},(function(){console.log(e.state.posts)})),e.deletePost(t.id)},e.choseMainSectionClass=function(){return function(e){var t="";switch(e.currentPage){case"home.html":t="posts";break;case"view-post.html":t="posts-view";break;case"sign-in.html":t="sign-in";break;case"account.html":t="acount-wraper";break;case"delete-post.html":t="posts-delete";break;case"edit-post.html":t="posts-edit";break;case"edit-post-form.html":t="edit"}return t}(e.state)},e.search=function(t){var n=t.target.value;e.setState({search:n}),console.log(e.state.search)},e.state={posts:[],search:null,isAuth:!1,editPostMode:!1,deletePostMode:!1,newPostMode:!1,currentPage:"home.html"},e}return Object(p.a)(n,[{key:"defaultModes",value:function(){this.state.newPostMode?this.setState({newPostMode:!1}):this.state.editMode?this.setState({editMode:!1}):this.state.deleteMode&&this.setState({deleteMode:!1})}},{key:"replacePreviousPost",value:function(e){return this.state.posts.map((function(t){return t.id===e.id&&(t=e),t}))}},{key:"deletePost",value:function(e){new f("http://localhost:3000").deletePost(e)}},{key:"renderView",value:function(){return function(e){switch(e.state.currentPage){case"home.html":return I("home.html"),e.defaultModes(),window.history.pushState({page:"home.html"},"home","/home.html"),M(e,e.state.posts,"home.html");case"view-post.html":return window.history.pushState("view","view","/view-post-".concat(e.state.selectedPost.id,".html")),s.a.createElement("div",null,s.a.createElement(P,{auth:e.state.selectedPost.author,post:e.state.selectedPost,isAuth:e.state.isAuth,page:"view-post.html"}));case"sign-in.html":return I("sign-in.html"),s.a.createElement(S,{signIn:e.handleSingIn});case"account.html":return I("account.html"),s.a.createElement(x,{accNewPostClick:e.handleAccNewPost,accEditPostClick:e.handleAccEditPost,accDeletePostClick:e.handleAccDeletePost});case"new-post.html":return I("new-post.html"),s.a.createElement(N,{postNewClick:e.handleNewPost,buttonName:"Post"});case"edit-post.html":return I("edit-post.html"),M(e,e.state.posts,"edit-post.html");case"edit-post-form.html":var t=e.state.selectedPost;return window.history.pushState({page:"edit-post-form.html"},null,"/edit-post-".concat(t.id,".html")),s.a.createElement(O,{title:t.title,text:t.text,author:t.author,date:t.date,new:e.handleEditPost});case"delete-post.html":return I("delete-post.html"),M(e,e.state.posts,"delete-post.html");case"about.html":return window.history.pushState({page:"about.html"},null,"/about.html"),s.a.createElement(j,null)}}(this)}},{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(s.a.Fragment,null,s.a.createElement(k,{page:this.state.currentPage,homeClickEvent:function(){return e.setState({currentPage:"home.html"})},aboutClickEvent:function(){return e.setState({currentPage:"about.html"})},accountClickEvent:function(){return e.setState({currentPage:"account.html"})},singInClickEvent:function(){return e.setState({currentPage:"sign-in.html"})},signOutClickEvent:this.handleSingOut,isLoggedIn:this.state.isAuth,search:this.search})),s.a.createElement("div",{className:this.choseMainSectionClass()},this.renderView()),s.a.createElement(C,null))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[124,1,2]]]);
//# sourceMappingURL=main.3a1a9562.chunk.js.map