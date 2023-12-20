import { useMutation } from "react-query"
import { axiosClient } from "../lib/axiosClient"
import { getUserId} from "../lib/utils"
import { useLocalStorage } from "usehooks-ts";

export function AddToCartBtn({data}){
    const userId = getUserId();
    const [cartItems,setCartItems] = useLocalStorage('cart',[])
    const currIndex = cartItems.findIndex(item=>item.id === data.id) ;

    const {mutate, isLoading} = useMutation({
        mutationFn:()=>axiosClient({
            method: "post",
            url: "/update_cart_item.php",
            data: {
                user_id : userId,
                shoe_id : data.id,
                quantity : 1
            },
            headers: { "Content-Type": "multipart/form-data" },
          }),
          onSuccess(data){
          }
    })
    function addItem (){
        if( currIndex == -1){
            setCartItems([...cartItems,{...data, quantity : 1} ])
            mutate();        
        }
    }
    return (   
    <button className="add-to-cart-btn relative" onClick={addItem} style={{cursor:  currIndex == -1 ?  'pointer' :'default', width:  currIndex == -1 ? 'auto' : '46px'}}>
        {
           currIndex == -1 ?  <p className="uppercase">add to cart</p> : <img src="/check.png" className="w-5 shrink-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"/>
        }
     
    </button>
    )
}