import React, { useContext, useEffect } from 'react'
import { GiFoodTruck } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';

function Nav() {

  let {input, setInput, setCate, setShowCart, cart} = useContext(dataContext);
  useEffect(() => {
    let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLocaleLowerCase().includes(input));
    setCate(newList);
  },[input])

  return (
    <div className='w-full h-[100px] flex items-center justify-between px-5 md:px-8'>
      {/*.......Logo........*/}
      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl'>
        <GiFoodTruck className='w-[40px] h-[40px] text-red-500'/>
      </div>
      {/*........Search bar........*/}
      <form className='bg-white flex items-center h-[60px] w-[45%] md:w-[70%] px-5 gap-5 rounded-md shadow-md' onSubmit={(e) => e.preventDefault()}>
        <IoSearchSharp className='w-[20px] h-[20px] text-red-500'/>
        <input className='w-[100%] outline-none font-[16px] md:text-[20px]' type="text" placeholder='Search items.......!' onChange={(e) => setInput(e.target.value)} value={input}/>
      </form>
      {/*.......Cart........*/}
      <div className='w-[60px] h-[60px] bg-white flex items-center justify-center rounded-md shadow-xl relative cursor-pointer group hover:bg-red-50 transition-colors' onClick={() => {
        setShowCart(true);
      }}>
        <span className='absolute top-0 right-2 text-red-500 font-bold text-[18px]'>{cart.length}</span>
        <IoBagHandleOutline className='w-[30px] h-[30px] text-red-500 group-hover:scale-110 transition-transform'/>
      </div>
    </div>
  )
}

export default Nav
