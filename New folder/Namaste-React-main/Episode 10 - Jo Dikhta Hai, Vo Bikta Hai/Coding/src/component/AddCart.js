import {useDispatch, useSelector } from "react-redux";
import {clearCart} from '../hooks/cartSlice';
import Itemlist from "./Itemlist";

const AddCart = () => {
const store = useSelector((store) => store);
const cartItems =store.cart.item

const dispatch = useDispatch();


  const handleClearCart = () => {
    // dispatch(clearCart())
    console.log('s');
    dispatch(clearCart())
    
  };








  return (
    <div className="text-center m-5 p-5">
        <h1 className="text-2xl font-bold">CART</h1>
          {/* {cartItems.length === 0  && <h1>cart item is empty ...</h1>}
              <Itemlist itemlist={cartItems} /> */}

{cartItems.length === 0 ? (
                    <h1>Cart is empty ...</h1>
                ) : (
                  <div className="w-6/12 mx-auto">

                      <Itemlist itemlist={cartItems} />
                      <button              onClick={handleClearCart}
   className="p-2 m-2 bg-red-500 hover:bg-red-400 duration-[.3s] text-white rounded-md font-medium"> Clear Cart 🧹</button>
                  </div>

                )}
             

          
         

    </div>
  )
}

export default AddCart