async function displayUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const users = document.getElementById('user');

    let userText = '';
    for (let i = 0; i < 3; i++) {
        const user = data[i];
        userText += `<pre>${JSON.stringify(user, null, 2)}</pre>`;
    }
    users.innerHTML += userText;
    console.log(userText)
  }
async function displayPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const posts = document.getElementById('post');

    let postsText = '';
    for (let i = 0; i < 5; i++) {
        const post = data[i];
        postsText += `<pre>${JSON.stringify(post, null, 2)}</pre>`;
    }
    posts.innerHTML += postsText;
    console.log(postsText)
}
async function displayComment() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    const comments = document.getElementById('comment');

    let commentsText = '';
    for (let i = 0; i < 3; i++) {
        const comment = data[i];
        commentsText += `<pre>${JSON.stringify(comment, null, 2)}</pre>`;
    }
    comments.innerHTML += commentsText;
    console.log(commentsText)
  }
displayUser()
.then (response => {
    console.log("The users are displayed well.");
})    
.catch(error => {
    console.log("There is an error here.");
})
displayPosts()
.then (response => {
    console.log("The posts are displayed well.");
})    
.catch(error => {
    console.log("There is an error here.");
})
displayComment()
.then (response => {
    console.log("The comments are displayed well.");
})    
.catch(error => {
    console.log("There is an error here.");
})
