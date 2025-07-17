// 'use client'
// import { useEffect,useState } from "react";

// const AdminProductCards = () => {
//     const [data, setData] = useState([]);
//     useEffect(()=>{
//         fetch('/data.json').then((res)=>res.json()).then((json)=>setData(json))
//         .catch((err) => console.error("Error:", err));
//     },[]);

//     return (
//         <div style={{ padding:'20px',display:'flex',justifyContent: 'center',flexDirection:'column',alignItems:'center' }}>
//         <h2 style={{textAlign:'center',marginBottom:'20px'}}>Product Database</h2>
//         <table className="main-container">
//             <thead>
//             <tr>
//                 <th>id</th>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Reviews</th>
//                 <th>Tagline</th>
//             </tr>
//             </thead>
//             <tbody>
//             {data.map((item,index)=>(
//                 <tr key={index}>
//                 <td>{index+1}</td>
//                 <td style={{textAlign:'center'}}>
//                     <img src={item.image} alt={item.title} style={{ width:'60px',height:'60px'}}></img>
//                 </td>
//                 <td>{item.title}</td>
//                 <td>{item.reviews}</td>
//                 <td>{item.tagline}</td>
//                 </tr>
//             ))}
//             </tbody>
//         </table>
//         </div>
//     );
// };

// export default AdminProductCards;

'use client'
import { useEffect, useState } from "react";

const AdminProductCards = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  useEffect(() => {
    fetch('/data.json').then((res) => res.json()).then((json) => setData(json)).catch((err) => console.error("Error:", err));
  }, []);
  const handleDelete = (index) => {
    const updated=[...data];
    updated.splice(index, 1);
    setData(updated);
  };
  const handleEdit =(index)=>{
    setEditIndex(index);
    setEditedItem(data[index]);
  };
  const handleSave=()=>{
    const updated = [...data];
    updated[editIndex] = editedItem;
    setData(updated);
    setEditIndex(null);
  };
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Database</h2>
      <table className="main-container">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Reviews</th>
            <th>Tagline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>
                <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px' }} />
              </td>
              <td>
                {editIndex === index?(<input value={editedItem.title} onChange={(e)=>setEditedItem({ ...editedItem, title: e.target.value })} />) 
                :(item.title)}
              </td>
              <td>
                {editIndex === index?(<input value={editedItem.reviews} onChange={(e)=>setEditedItem({ ...editedItem, reviews: e.target.value })} /> ) 
                :(item.reviews)}
              </td>
              <td>
                {editIndex === index?(<input value={editedItem.tagline} onChange={(e)=>setEditedItem({ ...editedItem, tagline: e.target.value })} />) 
                :(item.tagline)}
              </td>
              <td>
                {editIndex===index?(
                  <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </>
                ):(
                  <>
                    <button className="table-btn" onClick={() => handleEdit(index)}>Edit</button>
                    <button className="table-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProductCards;
