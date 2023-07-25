import React from 'react';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Navigate } from 'react-router-dom';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);



const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file,setFiles] = useState('');
    const [redirect, setRedirect] =useState(false)

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

     async function CreateNewPost(ev){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', file[0]);
        ev.preventDefault();
        const res = await fetch('http://localhost:3001/post', {
            method: 'POST',
            body: data,
            credentials:'include'
        });
        if (res.ok){
            setRedirect(true)
        }
    }

    if(redirect){
        return <Navigate to={'/blogs'}/>
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
                            onChange={ev=>setTitle(ev.target.value)}
                            required
                             />
                        <input
                            type='summary'
                            placeholder='Summary' 
                            value={summary} 
                            onChange={ev=>setSummary(ev.target.value)} 
                            required  
                            /> 
                        <input type='file' 
                            onChange={ev=>setFiles(ev.target.files)}
                            required
                        />
                        <ReactQuill
                            value={content}
                            modules={modules}
                            formats={formats}
                            onChange={newValue=>setContent(newValue)}
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