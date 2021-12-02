import React, {useState} from 'react';
import "./ProductsNutri.css";
import ProductsNutriBack from './ProductsNutriBack';
import ProductsNutriFront from './ProductsNutriFront';

/* composant pour changer la position de la carte back ou front */

function ProductsNutri( {product} ) {
  const [ isFlipNut, setIsFlipNut ] = useState(false);


  const handleFlip = () => {
    setIsFlipNut(!isFlipNut)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipNut ? 'flip' : ''}`}> 
      {isFlipNut ? 
      <ProductsNutriBack product={product} />
      :
      <ProductsNutriFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsNutri;