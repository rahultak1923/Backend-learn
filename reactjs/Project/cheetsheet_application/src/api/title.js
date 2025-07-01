export const TitleData = async()=>{
    const response = await fetch("http://localhost:8000/title/",{
        method:"GET",
    });
    return await response.json();
}