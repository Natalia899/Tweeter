const Tweeter = function () {
    const _posts = [
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
    const getPosts = function () {
        return _posts
    }
    const addPost = function (text) {
        postIdCounter++
        const post = {}
        post.id = 'p' + postIdCounter
        post.text = text
        post.comments = []
        _posts.push(post)

    }
    const removePost = (id) => {
        for (i = 0; i < _posts.length; i++) {

            if (id == _posts[i].id) {

                _posts.splice([i], 1)
            }
        }
    }
    const addComment = (commentText, id) => {
        commentIdCounter++

        for (let post of _posts) {
            const newComment = {}

            if (id === post.id) {
                newComment.id = 'c' + commentIdCounter
                newComment.text = commentText
                post.comments.push(newComment) 
                
            }


        }
    }
    const removeComment = (id, commentId) => {
        for (i = 0; i < _posts.length; i++) {
            if (id == _posts[i].id) {
                for (j = 0; j < _posts[i].comments.length; j++) {


                    if (commentId == _posts[i].comments[j].id) {
                        _posts[i].comments.splice([j], 1)
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


