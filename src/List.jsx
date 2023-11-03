import { useEffect, useState } from "react";
import Props from "./Props.jsx";
const List = () => {
    const [blogs, setBlog] = useState([
        { title: 'Red', body: 'Lorem...', author: "A", id: 1 },
        { title: 'Black', body: 'Ipsum...', author: "B", id: 2 },
        { title: 'Green', body: 'Lorem...', author: "A", id: 3 }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlog(newBlogs);
    };
    useEffect(()=>{
        console.log('effect run');
        console.log(blogs);
    })
    return (
        <div className="list">
            <Props blogs={blogs} title="All" handleDelete={handleDelete}></Props>
            <br />
            <Props blogs={blogs.filter((blog) => blog.author === "A")} title="A only" handleDelete={handleDelete}></Props>
        </div>
    );
}

export default List;