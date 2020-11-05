const Renderer = function() {
   
  const renderPosts = function(posts) { 
    $('#posts').empty()
    //console.log(posts)
    for (let post of posts) {
            
            // $('#posts').append(
              const newPost = $(
              `
            <div class='post' data-id='${post.id}'>
                <span>${post.text}</span>
                <span class='delete'>Delete post</span>
                <div id='newComment'> 
                    <input class='newComment' type="text" placeholder="Comment"> 
                    <span class='addComment'>Add comment</span> 
                </div>
            </div> `) 
            
            for (let comment of post.comments)
             {
               const newComment= $ (
               `<div class='comments '> <div class='comment'  data-id='${comment.id}' >
                <span class='commentText'>  ${comment.text}</span>

               <span class="delete-comment">X</span>   
             </div> </div>`)
             newPost.append(newComment)
            }
            $('#posts').append(newPost)
        } 


        
      }
    
   
   return { renderPosts
   }
}


