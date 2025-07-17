'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useEffect,useState } from "react";
const ProductCards =()=>{
    // const images = [`image${1}.jpg`,`image${2}.jpg`,`image${3}.jpg`,`image${4}.jpg`,`image${5}.jpg`,
    //     `image${6}.jpg`,`image${7}.jpg`,`image${8}.jpg`,`image${9}.jpg`,`image${10}.jpg`,`image${11}.jpg`,
    //     `image${12}.jpg`,`image${13}.jpg`,`image${14}.jpg`,`image${15}.jpg`]
    // const content=["Product1","Product2","Product3","Product4","Product5","Product6","Product7","Product8","Product9","Product10","Product11","Product12","Product13","Product14","Product15"]
    
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/data.json').then((res)=>res.json()).then((json)=>setData(json))
        .catch((err) => console.error("Error:", err));
    },[]);
    
    const route = useRouter();
    const index=0;
    return(
        <>
        <div style={{textAlign:"center",fontWeight:"bolder",marginTop:"30px"}}>Products to Buy Online</div>
        <div className="container">
            {
                data.map((item,index)=>(
                    <div key={index} className="card">
                    {/* <div className="content" onClick={()=>route.push(`/blog/${index}?Product=${content[index]}`)}> */}
                    <div className="content" onClick={()=>route.push(`/blog/${index}?Product=${item.title}`)}>
                        <img src={item.image} alt={`Product ${item.title}`}></img>
                    </div>
                    <div>
                        <div className="caption">{item.title}</div>
                        <div style={{ backgroundColor: "rgba(247, 255, 12, 0.51)",padding: "4px 10px",borderRadius: "12px",color: "black",fontSize: "12px",fontWeight: "500",
                        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",display: "inline-block"}}>{item.reviews}</div>
                        <div style={{ padding: "4px 10px",fontSize: "12px",fontWeight: "500",display: "inline-block"}}>{item.tagline}</div>
                    </div>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default ProductCards;