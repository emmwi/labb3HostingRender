// Källa: använt en del kod men även uppdaterat och lagt till/ändrat frö att får det att fungera med min backend
// https://dev.to/anne46/cart-functionality-in-react-with-context-api-2k2f

"use client";
import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from "react-toastify";
import { CartItem, CartContextProps } from "../../types/types";

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a contextProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [outOfStock, setOutOfStock] = useState<CartItem[]>([]);

  //hämtar carten direkt när man renderar sidan
  useEffect(() => {
    getCartItems();
  }, []);

  //klar 20240525
  const doesCartExists = () => {
    //  sätter sessionId till sessionId som finns i local storage
    let sessionId = localStorage.getItem("sessionId");
    console.log(sessionId);
    //om det inte finns ett sessionId i localstorage, sätts ett sessionId och sättes till localstorage
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem("sessionId", sessionId);

      fetch("http://localhost:8080/createSessionAndCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      }).catch((error) => {
        console.error("Error starting session and creating cart:", error);
      });
    }
    return sessionId;
    //returnerar sessionId
  };
  //hämtar det som finns i shoppingcart, klart 20240525
  async function getCartItems() {
    try {
      //kollar om det finns en cart eller inte
      const sessionId = doesCartExists();
      if (!sessionId) {
        throw new Error("session Id  finns inte");
      }
      //skicka en get till backend och skicka med sessionId som query med params
      const response = await axios.get("http://localhost:8080/getCartItems", {
        params: { sessionId },
      });
      //sätter cartItems till den datan som finns i cart_items tabellen
      console.log(response.data, "data från get cartitems");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error vid hämtning av varukorgen:", error);
    }
  }

  //Lägga till i shoppingCart - be om hjälp på denna klar 20240528
  const addToCart = (item: CartItem) => {
    //kollar om varan finns i varukorgen eller inte
    const isItemInCart = cartItems.find((cartItem) => {
      return cartItem.item_id === item.item_id;
    });
    //tilldelar sessionId till det som finns när man kör doesCartExists
    const sessionId: string | undefined | null = doesCartExists();
    //om item inte finns i cart läggs den till i newCartItem
    if (!isItemInCart || item.type === "pattern") {
      //kör en post med newCartItem till backend och därefter uppdateras det på frontend med setCartItems
      axios
        .post("http://localhost:8080/addToCart", {
          ...item,
          quantity: 1,
          sessionId,
        })
        .then((response) => {
          console.log("AddToCart response", response.data);
          setCartItems([...cartItems, response.data]);
          //lägger in toast här för att ge användaren info om varan är tillgänlig att köpa eller ej. man lan "paxa" varor i denna applikation
          toast(`${item.name} finns nu varukorgen!`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
            style: {
              backgroundColor: "",
              color: "#000",
              border: "1px solid #4CAF50",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "16px",
              fontSize: "16px",
            },
          });
        })

        .catch((error) => {
          //om man får ett error ska meddelande sättas och skrivas ut
          if (error.response) {
            setOutOfStock([...outOfStock, item]);
            //toast för när varan inte finns tillgänlig
            toast(`${item.name} är inte tillgänglig för köp!`, {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: "light",
              style: {
                backgroundColor: "",
                color: "#ef0d0d",
                border: "1px solid #f60b0b",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "16px",
                fontSize: "16px",
              },
            });
          } else console.error("Error adding item to cart:", error);
        });
    }
  };

  const removeFromCart = (item: CartItem) => {
    //filtererar items för att hitta det som ska tas bort
    const itemToRemove = cartItems.filter((cartItem) => {
      return cartItem.item_id !== item.item_id;
    });
    //sätter sessionId för att skicka med till backend.
    const sessionId = localStorage.getItem("sessionId");
    axios
      .post("http://localhost:8080/deleteItemFromCart", {
        item_id: item.item_id,
        sessionId: sessionId,
      })
      .then((response) => {
        console.log("deleteItemFromCart response", response.data);
        //uppdaterar setCartItem efter att det tagits bort från databasen.
        setCartItems(itemToRemove);
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  //ger rätt summa för allt man köpt.
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price);

      return total + price;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        setCartItems,
        cartItems,
        addToCart,
        removeFromCart,
        getCartTotal,
        doesCartExists,
        getCartItems,
        outOfStock,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
