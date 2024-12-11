async function displayUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const user = data[0];
    const address = user.address;
    const addressText = `
        <p>Street: ${address.street}</p>
        <p>Suite: ${address.suite}</p>
        <p>City: ${address.city}</p>
        <p>Zipcode: ${address.zipcode}</p>
        <p>Geo: (Lat: ${address.geo.lat}, Lng: ${address.geo.lng})</p>
    `;
    document.getElementById('user').innerHTML += addressText.trim();
    const response2 = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data2 = await response2.json()
    let posts = ""
    for (let i = 0; i < 5; i++) {
        const post = data2[i]
        const postText = `
            <p>User ID: ${post.userId}</p>
            <p>IT: ${post.it}</p>
            <p>Title: ${post.title}</p>
            <p>Body: ${post.body}</p>
        `
        posts += postText
    }
    document.getElementById('post').innerHTML += posts.trim()
  }
async function displayImage() {
    const response = await fetch('dog.png')
    const blob = await response.blob()
    document.getElementById("picture").src = URL.createObjectURL(blob)
}
displayImage()
.then(response => {
    console.log('image displayed')
})
.catch(error => {
    console.log('error')
})
displayUser()
.then (response => {
    console.log("The user is displayed well.");
})    
.catch(error => {
    console.log("There is an error here.");
})
