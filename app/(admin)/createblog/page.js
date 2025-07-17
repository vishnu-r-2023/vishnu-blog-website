'use client';
import { useState } from "react";

const CreateBlog = () => {
  const [formData,setFormData]=useState({image:'',title:'',reviews: '',tagline: ''});
  const [blogList,setBlogList]=useState([]);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]: e.target.value});
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    setBlogList([...blogList,formData]);
    setFormData({image:'',title:'',reviews:'',tagline:''});
  };
  return (
    <div style={{background:"linear-gradient(135deg, #ec8b46ff 0%, #c92500c3 100%)",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="create-container">
      <h1 className="create-title">Create a Blog</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="reviews" placeholder="Reviews" value={formData.reviews} onChange={handleChange} required />
        <input name="tagline" placeholder="Tagline" value={formData.tagline} onChange={handleChange} required />
        <button type="submit">Publish Blog</button>
      </form>
      <h2 className="preview-heading">Preview of Created Blogs</h2>
      <div className="blog-preview">
        {blogList.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title}></img>
            <h3>{blog.title}</h3>
            <p className="review">{blog.reviews}</p>
            <p className="tagline">{blog.tagline}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CreateBlog;
