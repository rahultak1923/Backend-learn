fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data =>{
    console.log(data)
    document.getElementById("title").textContent = data.title
})