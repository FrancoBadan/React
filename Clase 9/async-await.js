let getNameAsyn = async (idPost) =>{

try {
    let resPost = await fetch (`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    let post = await resPost.json();

    let resUser = await  fetch (`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    let user = await resUser.json();

    document.write(`${user.name} vive en ${user.address.city} escrivio el post ${idPost} y su titulo es ${post.title}`)
    

} catch (error) {
    console.log(error)
}


}

getNameAsyn(14)