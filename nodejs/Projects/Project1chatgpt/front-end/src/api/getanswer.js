export const getAnswer = async ()=>{
    const response = await fetch ("http://localhost:3000/",{
        method :"GET",
    });
    return await response.json();
}

export const postAnswer = async (question) => {
  const response = await fetch("http://localhost:3000/api/content", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      question: question, // backend me question send kar raha hai 
    }),
  });

  return await response.json();
};