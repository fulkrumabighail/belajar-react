const Props = ({ blogs ,title, handleDelete}) => {
    
    return (
        <div className="props">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={()=>handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default Props;