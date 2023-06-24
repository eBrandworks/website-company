import React from "react";
import "./Blogs.css";

const Blogs = ({title,img,des}) => {
  return (
    <div>
     
      
        <div className="col">
          <div class="card mb-3 blog-card border-0" style={{ maxWidth: "540px",alignItems:"flex-start"}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={require("../../assets/blogs/banner.jpg")} class="img-fluid rounded-start blog-img" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body d-flex flex-wrap ">
                  <h5 class="card-title text-start">{title}</h5>
                  <p class="card-text text-start">
                    {des}
                  </p>
                  {/* <p class="card-text text-start">
                    12/11/2023
                  </p> */}
                  <button className="btn btn-clr">Read More</button>
                </div>
              </div>
           
        </div>
 
      </div>
      </div>
    </div>
  );
};

export default Blogs;
