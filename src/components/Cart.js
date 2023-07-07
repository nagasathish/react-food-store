import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    };
    const calculateCartTotal = () => {
        return cartItems?.reduce((acc, cur) => {
            return acc + cur.price;
        },0);
    }

    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="cart">
            <h1>{cartItems.length} items in the Cart</h1>
            <button className="bg-orange-500 p-1" onClick={() => handleClearCart()}>Clear Cart</button>
            <div className="cart-list">
                {cartItems.map((item, index) => {
                    return <div key={index} className="cart-item">
                        <FoodItem itemDetails = {item}/>
                    </div>
                })}
                <div className="flex justify-end p-3">
                    Grand Total : &nbsp;<strong>₹{calculateCartTotal()/ 100}</strong>
                    </div>
            </div>
        </div>
    )
}

export default Cart;