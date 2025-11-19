import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

export default function Home(){
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(AppContext);

  useEffect(()=>{
    axios.get('/api/products').then(r=>setProducts(r.data));
  },[]);

  return <div>
    <h1>DhakaCart</h1>
    <div className="grid">
      {products.map(p => (
        <div key={p.id} className="card">
          <h3>{p.title}</h3>
          <p>{p.price} BDT</p>
          <button onClick={()=>addToCart(p)}>Add</button>
        </div>
      ))}
    </div>
  </div>;
}
