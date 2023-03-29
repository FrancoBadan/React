


let getNameAxios = async (idPost) =>{

    try {

        let resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        let resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)



    } catch (error) {
        console.log(error)
    }

}

getNameAxios(8)