"use server"
export const createBlog = async(data:IBlog) =>{
    const res = await fetch("http://localhost:5000/blogs", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store"
    });
    
    const blogInfo = res.json()
    return blogInfo;
}