import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module-react';
import { BASE_URL } from './helper';
import axios from 'axios'


Quill.register('modules/imageResize', ImageResize);



const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false)

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
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        console.log(files);
        await axios(`${BASE_URL}/post`, {
            method: 'POST',
            data: data,
            withCredentials: true,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>{
            console.log(res)
            setRedirect(false)
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
                        <button className='btn btn-orange' style={{ marginTop: '5px' }} >Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost