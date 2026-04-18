import React, { useContext } from 'react'
import { dataContext } from '../context/UserContext'
import { IoCloseCircleOutline, IoTimerOutline } from "react-icons/io5";
import { FaStar, FaFire } from "react-icons/fa";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function DetailsPopup() {
    const { selectedItem, setSelectedItem, addToCart } = useContext(dataContext);

    if (!selectedItem) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[200] p-4 transition-all duration-300">
            <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[40px] overflow-y-auto md:overflow-hidden shadow-2xl relative flex flex-col md:flex-row border border-white/20 animate-in fade-in zoom-in duration-300 custom-scrollbar">
                
                {/* Close Button - Stays fixed on mobile for easy access */}
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 z-[210] transition-all shadow-xl border border-gray-100 group"
                >
                    <div className="text-xl md:text-2xl font-light transform transition-transform group-hover:rotate-90">✕</div>
                </button>

                {/* Left side: Image Section */}
                <div className="w-full md:w-1/2 h-[250px] md:h-auto relative overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                        src={selectedItem.food_image} 
                        alt={selectedItem.food_name} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-md rounded-full text-white font-bold text-[10px] md:text-xs flex items-center gap-2 border border-white/20">
                        <FaFire className="text-orange-400" />
                        <span>350 Calories</span>
                    </div>
                </div>

                {/* Right side: Content Section */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between bg-white overflow-y-auto custom-scrollbar">
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-3 md:mb-4">
                                <div className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] border ${selectedItem.food_type === 'veg' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                                    {selectedItem.food_type === 'veg' ? "Pure Veg" : "Non-Veg"}
                                </div>
                                <div className="h-4 w-px bg-gray-200" />
                                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                                    {selectedItem.food_category}
                                </div>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-3 md:mb-4">
                                {selectedItem.food_name}
                            </h2>
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400 text-xs md:text-base">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={i < Math.floor(selectedItem.rating) ? 'fill-current' : 'text-gray-200'} />
                                    ))}
                                </div>
                                <span className="text-gray-400 font-bold text-[10px] md:text-xs">{selectedItem.rating}</span>
                            </div>
                        </div>

                        <div className="p-4 md:p-6 bg-gray-50 rounded-2xl md:rounded-3xl flex items-center justify-around border border-gray-100">
                            <div className="text-center">
                                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Time</div>
                                <div className="text-xs md:text-sm font-black text-gray-800">25 min</div>
                            </div>
                            <div className="h-6 w-px bg-gray-200" />
                            <div className="text-center">
                                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Serve</div>
                                <div className="text-xs md:text-sm font-black text-gray-800">1-2 Pers</div>
                            </div>
                            <div className="h-6 w-px bg-gray-200" />
                            <div className="text-center">
                                <div className="text-[9px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Type</div>
                                <div className="text-xs md:text-sm font-black text-gray-800">Organic</div>
                            </div>
                        </div>

                        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium">
                            {selectedItem.description}
                        </p>
                    </div>

                    <div className="mt-8 md:mt-12">
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                            <span className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest">Price</span>
                            <span className="text-3xl md:text-4xl font-black text-gray-900">
                                Rs {selectedItem.price}
                            </span>
                        </div>

                        <button 
                            onClick={() => {
                                addToCart(selectedItem);
                                setSelectedItem(null);
                            }}
                            className="w-full py-4 md:py-5 bg-red-500 hover:bg-red-600 text-white text-lg md:text-xl font-black rounded-2xl md:rounded-3xl shadow-2xl shadow-red-200 transition-all active:scale-95"
                        >
                            Add to Tray
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPopup
