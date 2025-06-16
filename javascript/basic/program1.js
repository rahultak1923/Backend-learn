document.getElementById("clickme").addEventListener("click",function(){
    const color = document.getElementById("inputbox").value;
    document.body.style.background = color;
    console.log("the user select background color is ", color)
})