import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";

function OrderSuccessPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 transition-all duration-300'>
      <div className='bg-white w-full max-w-md rounded-[40px] p-10 flex flex-col items-center text-center shadow-2xl border border-white/20 animate-in fade-in zoom-in duration-300'>
        <div className='w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 animate-bounce'>
          <IoCheckmarkCircle className='text-7xl text-green-500' />
        </div>
        
        <h2 className='text-3xl font-black text-gray-900 mb-3 tracking-tighter'>Order Success!</h2>
        <p className='text-gray-500 font-medium text-lg leading-relaxed mb-10'>
          Your delicious meal is being prepared and will be at your doorstep shortly. Thank you for choosing us!
        </p>

        <button 
          onClick={onClose}
          className='w-full py-5 bg-gray-900 hover:bg-black text-white text-xl font-bold rounded-3xl shadow-xl transition-all active:scale-95'
        >
          Sounds Good!
        </button>
      </div>
    </div>
  )
}

export default OrderSuccessPopup
