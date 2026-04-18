import React, { useContext } from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { dataContext } from '../context/UserContext';

function Card({name,type,id,price,image}) {
  const { addToCart, setSelectedItem, Cate } = useContext(dataContext);

  const handleCardClick = () => {
    const item = Cate.find(i => i.id === id);
    if (item) setSelectedItem(item);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent opening the popup when clicking the button
    const item = Cate.find(i => i.id === id);
    if (item) addToCart(item);
  };

  return (
    <div 
      className='w-[280px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-[0.5px] border-red-300 transition-all duration-300 cursor-pointer group'
      onClick={handleCardClick}
    >
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
          <img src={image} className='w-[100%] h-[100%] object-cover group-hover:scale-110 transition-transform duration-500'/>
        </div>
      <div className='text-2xl font-semibold'>
        {name}
      </div>
      <div className='w-full flex items-center justify-between text-red-500'>
        <div className='text-lg font-bold'>
           Rs:{price}
        </div>
        <div className='flex items-center gap-2 text-lg font-semibold'>
            {type==='veg' ? <LuLeafyGreen className="text-green-500"/> : <GiChickenOven />}
            <span>{type}</span>
        </div>
      </div>
      <button 
        className='w-full p-3 bg-red-500 rounded-lg hover:bg-red-400 font-semibold text-white transition-colors' 
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default Card
