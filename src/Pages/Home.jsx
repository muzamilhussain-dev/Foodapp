import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Category from './Category'
import Card from '../Components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import Card2 from '../Components/Card2'
import Footer from '../Components/Footer'
import DetailsPopup from '../Components/DetailsPopup'
import OrderSuccessPopup from '../Components/OrderSuccessPopup'
import { useState } from 'react'

function Home() {
  let { Cate, setCate, input, showCart, setShowCart, cart, totalPrice, toast, clearCart } = useContext(dataContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter((item) => item.food_category === category);
      setCate(newList);
    }
  }

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    clearCart();
    setShowCart(false);
  };

  return (
    <div className='bg-slate-50 w-full flex flex-col items-center min-h-screen font-sans relative overflow-x-hidden'>
      {/* Toast Notification */}
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[300] transition-all duration-500 transform ${toast ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}`}>
        <div className="bg-gray-900 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-4 border border-gray-800 backdrop-blur-md">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xl animate-bounce">✓</div>
          <span className="text-lg font-bold tracking-tight">{toast}</span>
        </div>
      </div>

      <OrderSuccessPopup isOpen={isOrderPlaced} onClose={() => setIsOrderPlaced(false)} />

      <Nav />
      
      {/* Main Content Container - Restricted width for big screens */}
      <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
        {input === '' ? (
          <div className='w-full flex justify-center py-10 px-4'>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9 justify-center gap-6 w-full'>
              {Category.map((item, index) => (
                <div
                  key={item.id}
                  className={`bg-white flex flex-col items-center justify-center gap-3 p-5 text-[18px] font-bold text-red-500 rounded-2xl shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-transparent min-w-[120px] h-[140px] lg:h-[150px] ${index === Category.length - 1 ? "col-span-2 sm:col-span-1 md:col-span-1" : ""}`}
                  onClick={() => filter(item.name)}
                >
                  <div className='text-3xl lg:text-4xl transition-colors duration-300'>{item.icon}</div>
                  <span className='whitespace-nowrap'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className='w-full flex flex-wrap justify-center items-center gap-8 px-5 py-10'>
          {Cate.length > 0 ? (
            Cate.map((item) => (
              <Card key={item.id} name={item.food_name} type={item.food_type} price={item.price} image={item.food_image} id={item.id} />
            ))
          ) : (
            <div className="text-2xl font-bold text-gray-400 py-20">No items found matching your search.</div>
          )}
        </div>
      </div>

      {/* Cart Drawer */}
      <div className={`fixed top-0 right-0 w-full sm:w-[450px] h-full bg-white z-[100] transition-all duration-500 transform ${showCart ? "translate-x-0" : "translate-x-full"} shadow-2xl flex flex-col`}>
        <header className='p-6 flex items-center justify-between border-b bg-white'>
          <div className="flex flex-col">
            <span className='text-gray-800 text-2xl font-bold tracking-tight'>My Order</span>
            <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{cart.length} items selected</span>
          </div>
          <button
            className='w-10 h-10 bg-gray-50 text-gray-400 hover:bg-red-500 hover:text-white rounded-xl flex items-center justify-center transition-all shadow-sm'
            onClick={() => setShowCart(false)}
          >
            ✕
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {cart.length > 0 ? (
            cart.map((item) => <Card2 key={item.id} item={item} />)
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-10">
              <div className="text-6xl mb-4 text-gray-200">🛒</div>
              <h3 className="text-xl font-bold text-gray-400">Your cart is empty</h3>
              <p className="text-gray-400 text-sm mt-2">Looks like you haven't added anything to your cart yet.</p>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <footer className="p-6 bg-gray-50 border-t">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-gray-800 font-bold">Rs {totalPrice}</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-500 font-medium">Delivery</span>
              <span className="text-green-600 font-bold uppercase text-sm">Free</span>
            </div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-800 text-2xl font-bold">Total</span>
              <span className="text-red-500 text-3xl font-black">Rs {totalPrice}</span>
            </div>
            <button
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white text-xl font-black rounded-2xl shadow-xl transform transition active:scale-95"
              onClick={handlePlaceOrder}
            >
              Confirm Order
            </button>
          </footer>
        )}
      </div>

      <DetailsPopup />
      <Footer />
    </div>
  )
}

export default Home
