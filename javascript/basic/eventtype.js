// add addEventListener to click 
document.getElementById("clickme").addEventListener("click",function(){
    alert("button clicked")
    console.log("button clicked",)
})

// add addEventListener to user input
document.getElementById("inputbox").addEventListener("input", function(event){
    const color = event.target.value;
    document.body.style.background = color;

    console.log("user type color is ",color);
})