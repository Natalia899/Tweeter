const Renderer = function() {
   
  const renderPosts = function(posts) { 
    $('#posts').empty()
    for (let post of posts) {
            
            $('#posts').append(`<div class='post'> ${post.text}  </div>`)
            for (let comment of post.comments)
             {
               $('.post').append(`<div class='comments'> ${comment.text} </div>`)
            }
        }
    
   } 
   return { renderPosts
   }
}
