// promise methods 
// .then & .catch promise methods

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response)=> response.json())
// .then((data)=> {
// console.log(data)
// document.getElementById("title").textContent = data.title
// } )
    
// .catch((error)=>console.log(error));

// .promise.all() to promise more then one 

Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://jsonplaceholder.typicode.com/posts/2')
])
.then((response)=> Promise.all(response.map(res => res.json())))
.then((data)=>{
console.log("all the data is ",data)
document.getElementById("title").textContent= `${data[0].title} | ${data[1].title}`
})