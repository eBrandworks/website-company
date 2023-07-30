import React, { useEffect } from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios'
import { BASE_URL } from './helper';

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
    axios(`${BASE_URL}/post/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setSummary(res.data.summary);
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
    const response = await axios(`${BASE_URL}/post`, {
      method: 'PUT',
      data: data,
      withCredentials: true,
    });
    if (response.status === 200) {
      setRedirect(true)
    }
  }

  if (redirect) {
    return <Navigate to={'/blog'} />
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