import React from 'react';

const DollarPriceDisplay = ({ price, priceChange }) => {
  const getPriceChangeIndicator = () => {
    if (priceChange === 'Increase') {
      return <span style={{ color: 'green' }}>↑</span>
    } else if (priceChange === 'Decrease') {
      return <span style={{ color: 'red' }}>↓</span>
    } else {
      return <span style={{ color: 'gray' }}>→</span>
    }
  }

  return (
    <div className="flex flex-row items-center bg-white/60 text-black px-2 rounded-lg shadow-md w-full max-w-xs">
      <p className="ml-2"><span className='font-bold'><span className="font-bold">$</span>:</span> ${price}</p>
      {priceChange && (
        <p className="ml-2 font-black">
          {getPriceChangeIndicator()}
        </p>
      )}
    </div>
  )
}

export default DollarPriceDisplay;