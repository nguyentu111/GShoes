import {  useReadLocalStorage } from "usehooks-ts";
import { CartItem } from "./CardItem";
import {formatMoney} from '../lib/utils'
export function Cart(){
    const cartItems = useReadLocalStorage('cart',[])
    const total = cartItems.reduce((acc,crr)=>acc + (+crr.price * crr.quantity) ,0);
    return  <div className="card">
        <img src="/nike.png" className="w-[50px] my-3 z-10 relative" />
        <div className="flex justify-between items-center"> 
            <div className="text-[24px] font-bold relative my-4">Your cart</div>
            <div className="text-[24px] font-bold relative my-4">${formatMoney(total)}</div>
        </div>
        <div className="card-body relative">
            <ul className="pb-8">
                <div className="my-5 text-sm font-thin hidden last:block"><p>Your cart is empty.</p></div>
                {
                    cartItems?.map(card=>{
                        return  <li key={card.id}>
                                    <CartItem data={card}/>
                                </li>
                    })
                }
              
            </ul>
        </div>
    </div>
}