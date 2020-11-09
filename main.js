const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

$('#post').on('click', function () {
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.delete', function () {
    const postId = $(this).closest('.post').data().id
   tweeter.removePost(postId)

    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click', '.addComment', function () {
    const postId = $(this).closest('.post').data().id
    const commentText = $(this).closest('#newComment').find('input').val()
    tweeter.addComment(commentText, postId)
    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click', '.delete-comment', function () {
    const postId = $(this).closest('.post').data().id
    const commentId =  $(this).closest('.comment').data().id
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})