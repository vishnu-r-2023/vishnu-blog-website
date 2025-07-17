'use client';
import { useEffect, useState } from "react";

const UpdateBlog=()=>{
  const [data,setData]=useState([]);
  const [selectedId,setSelectedId] = useState(null);
  const [formData,setFormData] = useState(null);
  useEffect(() => {fetch('/data.json').then(res => res.json()).then(json => setData(json))
    .catch(err => console.error("Error:", err));
  },[]);
  const handleSelect=(e)=>{
    const index = parseInt(e.target.value);
    setSelectedId(index);
    setFormData({...data[index]});
  };
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const updated=[...data];
    updated[selectedId]=formData;
    setData(updated);
  };
  return (
    <div style={{background:"linear-gradient(135deg, #ec8b46ff 0%, #c92500c3 100%)",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div className="create-container">
      <h1 className="create-title">Update Blog</h1>
      <label style={{fontSize:'16px',marginBottom:'12px'}}>Choose a Blog:</label>
      <select onChange={handleSelect} style={{padding:'10px',marginBottom:'24px',borderRadius:'8px' }}>
        <option value="">Select a Blog</option>
        {data.map((item, index) => (
          <option value={index} key={index}>{item.title || `Blog ${index+1}`}</option>
        ))}
      </select>
      {formData&&(
        <>
          <form className="create-form" onSubmit={handleSubmit}>
            <input name="image" value={formData.image} onChange={handleChange} required />
            <input name="title" value={formData.title} onChange={handleChange} required />
            <input name="reviews" value={formData.reviews} onChange={handleChange} required />
            <input name="tagline" value={formData.tagline} onChange={handleChange} required />
            <button type="submit">Save Changes</button>
          </form>
          <h2 className="preview-heading">Updated Preview</h2>
          <div className="blog-preview">
            <div className="blog-card">
              <img src={formData.image} alt={formData.title}></img>
              <h3>{formData.title}</h3>
              <p className="review">{formData.reviews}</p>
              <p className="tagline">{formData.tagline}</p>
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
};
export default UpdateBlog;
