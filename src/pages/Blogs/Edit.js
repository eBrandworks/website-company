import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';

function Edit() {

  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false)

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  useEffect(() => {
    fetch('http://localhost:3001/post/' + id)
      .then((res) => {
        res.json().then((postInfo) => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      });
  }, []);

  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('id', id);
    if (file?.[0]) {
      data.set('file', file?.[0]);
    }
    const response = await fetch('http://localhost:3001/post', {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Navigate to={'/blogs'} />
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <form onSubmit={updatePost}>
            <input
              type='title'
              placeholder='Title'
              value={title}
              onChange={ev => setTitle(ev.target.value)}
              required
            />
            <input
              type='summary'
              placeholder='Summary'
              value={summary}
              onChange={ev => setSummary(ev.target.value)}
              required
            />
            <input type='file'
              onChange={ev => setFiles(ev.target.files)}
              required
            />
            <ReactQuill
              value={content}
              modules={modules}
              formats={formats}
              onChange={newValue => setContent(newValue)}
              theme='snow'
            />
            <button className='btn btn-orange' style={{ marginTop: '5px' }} >Update Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Edit