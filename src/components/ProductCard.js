import React from "react";

import DenimWashShirt from './assets/products/denim_wash_tshirt.jpg';
import PlaidShirt from './assets/products/plaid_shirt.jpg';
import RaglanTee from './assets/products/raglan_tee.jpg';
import RugbyJersey from './assets/products/rugby_jersey.jpg';
import StapleTee from './assets/products/staple_tee.jpg';
import StapleStripeTee from './assets/products/staple_stripe.jpg';
import StoneWash from './assets/products/stone_wash.jpg';

function getImageByKey(key) {
  switch (key) {
      case "Denim wash tshirt":
          return DenimWashShirt;    
      case "Plaid shirt":
          return PlaidShirt;
      case "Raglan tee":
          return RaglanTee;
      case "Rugby jersey":
          return RugbyJersey;                
      case "Staple tee":
          return StapleTee;                
      case "Staple stripe tee":
          return StapleStripeTee;                
      case "Stone wash singlet":
          return StoneWash;                
      default:
          break;
  }
}

export default function ProductCard({ product }) {

  return (
    <div className="items-center overflow-hidden bg-white shadow-lg fle md:flex-column">
      <img className="flex-shrink-0 w-auto h-56 mx-auto" src={getImageByKey(product.name)} alt={product.name} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-left text-gray-800">{product.name}</h3>
        <p className="text-left text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}