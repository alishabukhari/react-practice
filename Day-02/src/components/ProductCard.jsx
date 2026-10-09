import React from 'react'
import { useState } from 'react';

function ProductCard( {name, price}) {

    const [added, setAdded] = useState(false);

    const handleClick = () => {
        setAdded(true);
    };

  return (
    <div>
        <hr />
        <h3>{name}: {price}</h3>
        <button 
            style={{backgroundColor: "crimson", color: "#fff", fontSize: '16px', fontWeight: 'bold', padding: '8px 16px', borderRadius: "20px"}}
            onClick= {handleClick}
        >
            Add to Cart
        </button>

        {added &&
            <h4> Added to cart! </h4>
        }
    </div>
  );
};

export default ProductCard;
