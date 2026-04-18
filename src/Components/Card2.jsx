import React, { useContext } from 'react'
import { RiDeleteBin4Line } from "react-icons/ri";
import { dataContext } from '../context/UserContext';

function Card2({ item }) {
  const { removeFromCart, updateQuantity } = useContext(dataContext);

  if (!item) return null;

  return (
    <div className='w-full p-4 flex gap-4 bg-white rounded-2xl shadow-sm mb-4 border border-gray-50 hover:border-red-100 transition-all group'>
      <div className='w-24 h-24 overflow-hidden rounded-xl bg-gray-50 flex-shrink-0'>
          <img src={item.food_image} alt={item.food_name} className='w-full h-full object-cover transition-transform group-hover:scale-110 duration-500'/>
      </div>
      <div className='flex-1 flex flex-col justify-between py-0.5'>
          <div className='flex justify-between items-start'>
            <div className='text-sm text-gray-400 font-bold uppercase tracking-wider mb-1'>{item.food_category}</div>
            <button 
              onClick={() => removeFromCart(item.id)}
              className='p-1.5 hover:bg-red-50 rounded-lg transition-colors text-gray-300 hover:text-red-500'
            >
              <RiDeleteBin4Line className='w-5 h-5'/>
            </button>
          </div>
          <div className='text-lg text-gray-900 font-extrabold line-clamp-1 mb-2 leading-none'>{item.food_name}</div>
          
          <div className='flex items-center justify-between'>
            <div className='flex items-center bg-gray-100 rounded-xl px-1 py-1 border border-gray-200'>
                <button 
                  className='w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-red-500 font-black'
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  −
                </button>
                <span className='w-10 text-center font-black text-gray-800 text-sm'>{item.food_quantity}</span>
                <button 
                  className='w-8 h-8 flex items-center justify-center hover:bg-white rounded-lg transition-all text-red-500 font-black'
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
            </div>
            <div className='text-xl text-red-500 font-black'>
              Rs {item.price * item.food_quantity}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card2
