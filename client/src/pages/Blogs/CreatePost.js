import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module-react';
import { BASE_URL } from './helper';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress';
// const FormData = require('form-data');



Quill.register('modules/imageResize', ImageResize);



const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [loading, setLoading] = useState(false)

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
        }
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    async function CreateNewPost(ev) {
        setLoading(true);
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        console.log(files);
        await axios(`${BASE_URL}/post`, {
            method: 'POST',
            data: data,
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then((res) => {
            setRedirect(true);
            setLoading(false);
        })
    }

    if (redirect) {
        return <Navigate to={'/blog'} />
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <form onSubmit={CreateNewPost}>
                        <input
                            type='title'
                            placeholder='Title'
                            name='title'
                            value={title}
                            onChange={ev => setTitle(ev.target.value)}
                            required
                        />
                        <input
                            type='summary'
                            placeholder='Summary'
                            name='summary'
                            value={summary}
                            onChange={ev => setSummary(ev.target.value)}
                            required
                        />
                        <input type='file'
                            onChange={ev => setFiles(ev.target.files)}
                            // name='file'
                            accept='image/*'
                            required
                        />
                        <ReactQuill
                            value={content}
                            modules={modules}
                            formats={formats}
                            onChange={newValue => setContent(newValue)}
                            theme='snow'
                        />
                        {!loading &&
                        <button className='btn btn-orange' style={{ marginTop: '5px' }} >
                             Create Post
                        </button>}
                        {loading && <div className='btn-progress w-100' style={{ marginTop: '5px' }} >
                             <CircularProgress size={25} className='mt-2 mb-1' style={{ color: "white", fontSize: "12px" }} />
                        </div>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost