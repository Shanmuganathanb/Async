const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts() {
    setTimeout(()=>{
        let output="";
        posts.forEach((post,index)=>{
            output += `<li>${post.title}</li>`;
            document.body.innerHTML = output;
        })
    },3000);
}

async function createPost(post) {
        await posts.push(post);
        getPosts();
};

function deletePost() {
        if (posts.length){
            posts.pop()
        } else{
            console.log("array is empty")
        }
        getPosts();
};

async function init(){
    await createPost({title:'Post Three', body:'This is third '});
    deletePost();
    deletePost();
    deletePost();
}
init();