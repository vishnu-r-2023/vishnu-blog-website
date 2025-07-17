'use client'
import { useParams, useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
const BlogId =()=>{
    // const images = [`image${1}.jpg`,`image${2}.jpg`,`image${3}.jpg`,`image${4}.jpg`,`image${5}.jpg`,
    //     `image${6}.jpg`,`image${7}.jpg`,`image${8}.jpg`,`image${9}.jpg`,`image${10}.jpg`,`image${11}.jpg`,
    //     `image${12}.jpg`,`image${13}.jpg`,`image${14}.jpg`,`image${15}.jpg`]
    const params = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/data.json').then((res)=>res.json()).then((json)=>setData(json))
        .catch((err) => console.error("Error:", err));
    },[]);
    const thatProduct = data[parseInt(params.id)];
    const image=thatProduct?.image;
    const tagl=thatProduct?.tagline;
    const rev=thatProduct?.reviews;

    const recommendations = [
        { title: "Mixer", description: "Makes you sweet dishes." },
        { title: "Grinder", description: "Grinds the Veggies." },
        { title: "iPad", description: "iPads for your creativity" },
        { title: "iPhone", description: "Videography Matters" },
        { title: "Samsung S23 ULTRA", description: "Camera Perfrection" },
        { title: "Juicer", description: "designed to grind the fruits to produce juice." }
    ];

    const searchParams = useSearchParams();
    const product= searchParams.get("Product");
    return(
        <div className="product-container">
            <div className="product-capsule">
                <img src={`/${image}`} className="product-image"></img>
                <div className="product-des">
                    <h2>{product}</h2>
                    <p>
                        This is the detailed description of the Product. You can buy this here online for lifetime.
                    </p>
                    <p>Product Name: {product}</p>
                    <p>Product Description: {tagl}</p>
                    <p>No. Of. Reviews: {rev}</p>
                </div>
            </div>
            <div className="recommendation-box">
            <h3>Recommended Products(6)</h3>
            <ul className="recommendation-list">
                {recommendations.map((rec, index) => (
                <li key={index} className="recommendation-item">
                    <strong>{rec.title}</strong> – {rec.description}
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
export default BlogId;