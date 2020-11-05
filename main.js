const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())
$('#post').on('click', function () {
    tweeter.addPost($('#input').val())
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.delete', function () {
    
   tweeter.removePost($(this).closest('.post').data().id)

    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click', '.addComment', function () {
    console.log($(this).closest('#newcomment').find('.newComment'))
    tweeter.addComment($(this).closest('.post').find('.newcomment').val(), $(this).closest('.post').data().id)
    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click', '.delete-comment', function () {

    tweeter.removeComment($(this).closest('.post').data().id, $(this).closest('.comment').data().id )
    renderer.renderPosts(tweeter.getPosts())
})