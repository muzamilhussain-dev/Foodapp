import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast, MdOutlineSoupKitchen, MdOutlineIcecream } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { RiRestaurantLine, RiCupLine } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";


const Category = [
    {
        id : 1,
        name : "All",
        icon : <TiThSmall className="w-[60px] h-[60px]"/>
    },
    {
        id : 2,
        name : "breakfast",
        icon : <MdOutlineFreeBreakfast className="w-[60px] h-[60px]"/>
    },
    {
        id : 3,
        name : "soups",
        icon : <MdOutlineSoupKitchen className="w-[60px] h-[60px]"/>
    },
    {
        id : 4,
        name : "pasta",
        icon : <CiBowlNoodles className="w-[60px] h-[60px]"/>
    },
    {
        id : 5,
        name : "main_course",
        icon : <RiRestaurantLine className="w-[60px] h-[60px]"/>
    },
    {
        id : 6,
        name : "pizza",
        icon : <FaPizzaSlice className="w-[60px] h-[60px]"/>
    },
    {
        id : 7,
        name : "burger",
        icon : <PiHamburger className="w-[60px] h-[60px]"/>
    },
    {
        id : 8,
        name : "desserts",
        icon : <MdOutlineIcecream className="w-[60px] h-[60px]"/>
    },
    {
        id : 9,
        name : "drinks",
        icon : <RiCupLine className="w-[60px] h-[60px]"/>
    },
]


export default Category;