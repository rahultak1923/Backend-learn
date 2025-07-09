export const TitleData = async()=>{
    const response = await fetch("http://localhost:8000/title/",{
        method:"GET",
    });
    return await response.json();
}
export const CreateTitle = async(formData)=>{
    console.log(formData)
    const response = await fetch("http://localhost:8000/title/add",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(formData),
    })
    return await response.json();
}