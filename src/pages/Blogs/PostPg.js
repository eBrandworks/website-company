import { formatISO9075 } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useContext } from 'react';
import { UserContext } from './UserContext';

import { Link, Navigate } from 'react-router-dom'



function PostPg() {
  const [postInfo, setPostinfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3001/post/${id}`)
      .then(res => {
        res.json()
          .then(postInfo => {
            setPostinfo(postInfo);
          });
        if (res.ok) {
          setLoading(false);
        }
      });
  }, [id]);

  async function deleteone() {
    setPostinfo(null)
    await fetch(`http://localhost:3001/post/delete/${id}`, {
      method: 'DELETE',
    }).then(res => {
      res.json()
        .then(postInfo => {
          setPostinfo(postInfo);
        })
      if (res.ok) {
        console.log('true')
        setRedirect(true)
      }
    })
  }


  if (redirect) {
    return <Navigate to={'/blogs'} />
  }

  if (!postInfo) return '';

  return (
    <div>
      <div className=' my-3 container postPg'>
        {!loading && <div className='row'>
          <div className='col'>
            <h1 className='fw-bolder m-0'>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.updatedAt))}</time>
            <div className='author'>by @{postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
              <>
                <div className='edit'>
                  <Link className='edit-btn' to={`/blogs/edit/${postInfo._id}`} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit this post
                  </Link>
                  <a className='edit-btn ms-2' onClick={deleteone} >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                    Delete this post
                  </a>
                </div>
              </>
            )}
            <div className='img'>
              <img className='img-fluid' style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }} src={`http://localhost:3001/${postInfo.cover}`} alt='' />
            </div>
            <div style={{ textAlign: 'justify', wordWrap: ' break-word' }} className='my-4 postPageContent' dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            <div className='edit'>
              <Link className='edit-btn' to='/blogs'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>}
        {loading && <CircularProgress color="warning" style={{
          margin: '70px 0'
        }} />}
      </div>
    </div>
  )
}
export default PostPg