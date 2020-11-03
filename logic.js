const LogicTweeter = function() {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let postIdCounter = 2
    let commentIdCounter = 6
    const getPosts = function() {
        return _posts
    }
    const addPost = function(text) {
        postIdCounter++
        let post = {}
        post.id = 'p'+ postIdCounter
        post.text = text
        post.comment = ''
        _posts.push(post)

    }
    const removePost = (id) => { 
        for (i=0; i<_posts.length; i++)
         { 
             
    if (id == _posts[i].id) {

         _posts.splice([i],1)
          } 
       } 
    }
    const addComment = (commentText, id) => {
       commentIdCounter++
      
      let newComment = {}
      for (i=0; i<_posts.length; i++) {

        if (id == _posts[i].id) {
            newComment.id = 'c'+ commentIdCounter
            newComment.text = commentText
            console.log(newComment);
            _posts[i].comments.push(newComment) 
        }
        

         } 
    }
    const removeComment = (id, commentId) => {
        for (i=0; i<_posts.length; i++) {
            if (id == _posts[i].id) {  
                for (m=0; m<_posts[i].comments.length; m++) {
                   
                    
            if (commentId == _posts[i].comments[m].id) {
                 _posts[i].comments.splice([m], 1)
            } 
          }   
       }
     }
    }
    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}
const tweeter = LogicTweeter()

tweeter.addPost("This is my own post!")
tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
//console.log(tweeter.getPosts())
//console.log(tweeter.getPosts())
//tweeter.removePost("p1")
console.log(tweeter.getPosts())

//tweeter.removeComment("p2", "c6")
//console.log(tweeter.getPosts())
//console.log(tweeter.getPosts())