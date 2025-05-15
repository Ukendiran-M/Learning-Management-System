import React from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({input, setInput}) => {
    const handleChange = (content) => {
        setInput({...input, description: content});
    }
   
    return (
        <ReactQuill 
            theme="snow" 
            value={input?.description || ''} 
            onChange={handleChange}
            modules={{
                toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean']
                ],
            }}
        />
    );
}

export default RichTextEditor;