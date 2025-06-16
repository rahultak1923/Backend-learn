console.log("async testing")

async function getdata() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data)
        document.getElementById("title").textContent = data.title

    }catch(error){
        console.log("the error", error)
    }
    console.log("the after the line the code ")
}

getdata()