const getNamefetch = (idPost) =>{
  
    try {
        fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        .then(res=>{
           /*  console.log(res) */
            return res.json()
        })
        .then(post=>{
        fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res=>{
            /*  console.log(res) */
             return res.json()
         })
         .then(user=>{
            console.log(`${user.name} escribio el post ${idPost} y su titulo es ${post.title}`)
         })
        })
    } catch (error) {
        console.log(error)
    }
    
    }
    getNamefetch (15)
