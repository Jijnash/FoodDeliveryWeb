import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")
    const currency = "₹";
    const deliveryCharge = 50;

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
        if (!prev[itemId]) return prev;

        const updated = { ...prev };
        updated[itemId] -= 1;

        if (updated[itemId] === 0) {
            delete updated[itemId];
        }

        return updated;
    });

    if (token) {
        await axios.post(
            url + "/api/cart/remove",
            { itemId },
            { headers: { token } }
        );
    }
};

    const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
        const itemInfo = food_list.find(
            (product) => product._id === itemId
        );

        if (itemInfo) {
            totalAmount += itemInfo.price * cartItems[itemId];
        }
    }

    return totalAmount;
};


    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data)
    }

   const loadCartData = async (token) => {
    const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token } }
    );
    setCartItems(response.data.cartData || {});
};

    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"))
                await loadCartData({ token: localStorage.getItem("token") })
            }
        }
        loadData()
    }, [])

    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems,
        currency,
        deliveryCharge
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;