import React from "react";
import "./Blogs.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/post')
      .then(res => {
        res.json()
          .then(posts => {
            setPosts(posts)
          }).catch((err) => {
            res.json(err)
          })
        if (res.ok) {
          setLoading(false);
        }
      });

  }, []);
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col">
            {!loading &&
              posts.length > 0 && posts.map((post, index) => (
                <Post key={index} {...post} />
              ))}
            {loading && <CircularProgress color="warning" style={{
              margin: '70px 0'
            }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
