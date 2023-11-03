import { useEffect, useState } from "react";
import Props from "./Props.jsx";
const List = () => {
    const [blogs, setBlog] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(null);
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);
    // };
    useEffect(()=>{
       setTimeout(() => {
        fetch('http://localhost:8000/books')
        
        .then(res=>{
            if (!res.ok) {
                throw Error("Could not fetch data from server");
            }
            console.log(res);
            return res.json();
        })
        .then(data =>{
            setBlog(data);
            setIsPending(false);
            setIsError(null);
        })
        .catch(err =>{
            setIsError(err.message);
            setIsPending(false);
            // console.log(err.message);
        })
       }, 1000);
    }, []);
return (
    <div className="list">
        {isError && <div>{isError}</div>}
        {isPending && <div>Loading.....</div>}
        {blogs && <Props blogs={blogs} title="All" ></Props>}
        <br />
        {/* {blogs && <Props blogs={blogs.filter((blog) => blog.author === "A")} title="A only" handleDelete={handleDelete}></Props>} */}
    </div>
);
}

export default List;