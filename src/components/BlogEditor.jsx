import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import Quill styles

const BlogEditor = ({ handleSavePost, postData }) => {
  const [editorContent, setEditorContent] = useState(postData?.content || '');
  const [title, setTitle] = useState(postData?.title || '');
  const [imageUrl, setImageUrl] = useState(postData?.imageUrl || '');

  const handleChange = (value) => {
    setEditorContent(value);
  };

  return (
    <div className="space-y-4 p-4">
      <input
        type="text"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <ReactQuill value={editorContent} onChange={handleChange} className="border border-gray-300 rounded-md" />
      <button
        onClick={() => handleSavePost(title, editorContent, imageUrl)}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Save Post
      </button>
    </div>
  );
};

export default BlogEditor;
