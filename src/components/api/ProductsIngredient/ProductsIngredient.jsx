import React, {useState, useEffect} from 'react';
import "./ProductsIngredient.css";
import ProductsIngredientFront from './ProductsIngredientFront';
import ProductsIngredientBack from './ProductsIngredientBack';

/* composant pour changer la position de la carte back ou front et il crée une alerte allergène qui pop à l'arrivée sur la page*/

function ProductsIngredients( {product} ) {

  const [ isFlipIng, setIsFlipIng ] = useState(false);

  let withoutEng = product.allergens.replaceAll('en:','');

  const alertAllergen = () => {
   if (product.allergens !== ''){
    alert(`Attention ce produit contient les allergènes suivants: ${withoutEng}`)
   }
  }

  useEffect(() => {
   alertAllergen() 
  }, [])

  const handleFlip = () => {
    setIsFlipIng(!isFlipIng)
  }

    return (

        <div onClick={handleFlip}  className={`card ${isFlipIng ? 'flip' : ''}`}> 
      {isFlipIng ? 
      <ProductsIngredientBack product={product} />
      :
      <ProductsIngredientFront />
    }   
     
     
     
     </div>

    );
}

export default ProductsIngredients;

