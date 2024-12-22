"use client"
import useDollarPrice from '@/app/hooks/useDollarPrice'
import React from 'react'
import DollarPriceDisplay from './DollarPriceDisplay'

const DollarPrice = () => {
  const { price, priceChange, isLoading } = useDollarPrice()

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : price !== 'N/A' ? (
        <DollarPriceDisplay price={price} priceChange={priceChange} />
      ) : (
        <p>Failed to fetch dollar price. Please try again later.</p>
      )}
    </div>
  )
}

export default DollarPrice
