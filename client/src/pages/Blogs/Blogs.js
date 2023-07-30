import React from "react";
import "./Blogs.css";
import Post from "./Post";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { BASE_URL } from './helper';
import axios from 'axios'

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`${BASE_URL}/posts`)
      .then(res => {
        console.log(res)
        setPosts(res.data)
        setLoading(false);
      }).catch((err)=>{
        console.log(err)
        if(err.code === "ERR_NETWORK"){
          axios(`${BASE_URL}/posts`)
          .then(res => {
            console.log(res)
            setPosts(res.data)
            setLoading(false);
          })
        }
      })

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
