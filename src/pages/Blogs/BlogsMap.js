import React from "react";
import BlogsData from "./BlogsData";
import Blogs from "./Blogs";
import "./Blogs.css";

const BlogsMap = () => {
  return (
    <div>
         <div className="Blog-Header">
        <h1 className="blogs-heading">Our Blogs</h1>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 my-5">
          {BlogsData.map((blog) => (
            <div key={blog.id}>
              <Blogs
                title={blog.title}
                des={blog.discription}
                image={blog.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsMap;
