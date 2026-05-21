import React from "react";
import "./ProductContainer.css";

interface ProductContainerProps {
  imageUrl: string;
  altText: string;
  description: string;
}

export const ProductContainer: React.FC<ProductContainerProps> = ({
  imageUrl,
  altText,
  description,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={altText} className="product-image" />

      {/* Decomentar si se desea mostrar la descripción */}
      <p className="product-description">{description}</p>
    </div>
  );
};
