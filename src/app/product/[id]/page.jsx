import React from "react";
import { products } from "@/app/lib/products";

const ProductPage = ({ params }) => {
  const { id } = params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-xl mb-4">{product.shortDescription}</p>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>{product.detailedDescription.overview}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Technical Specifications</h2>
        <ul>
          {Object.entries(product.detailedDescription.technicalSpecifications).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Usage</h2>
        <p>{product.detailedDescription.usage}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Price Range</h2>
        <p>{product.detailedDescription.priceRange}</p>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id.toString(),
  }));
}

export default ProductPage;