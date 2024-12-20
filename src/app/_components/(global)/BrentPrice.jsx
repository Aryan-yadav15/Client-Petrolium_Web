"use client";
import React from "react";
import OilPriceDisplay from "./OilPriceDisplay";
import useBrentPrice from "./useBrentPrice";

const BrentPrice = () => {
  const { price, priceChange, isLoading } = useBrentPrice();

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : price !== "N/A" ? (
        <OilPriceDisplay price={price} priceChange={priceChange} />
      ) : (
        <p>Failed to fetch price. Please try again later.</p>
      )}
    </div>
  );
};

export default BrentPrice;
