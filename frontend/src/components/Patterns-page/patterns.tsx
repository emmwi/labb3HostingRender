"use client";
import { useCartContext } from "../shopping-cart/CartContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Card,
  Img,
  Container,
  Info,
  OderButton,
  Price,
} from "../general-css/GeneralStyles";
import { Item } from "../../types/types";

export default function PatternContent() {
  const { addToCart, doesCartExists } = useCartContext();
  console.log("cartcontext hittas");

  const [items, setItem] = useState([]);

  async function fetchItems() {
    try {
      const response = await axios.get("http://localhost:8080/getItems", {});
      if (response.data) {
        console.log(response.data, "vad får jag");
        const filteredItems = response.data.filter(
          (fItem: { type: any }) => fItem.type === "pattern"
        );

        setItem(filteredItems);
      }
    } catch (error) {
      console.log("fel vid hämtning av patterns", error);
    }
  }
  useEffect(() => {
    fetchItems();
  }, []);

  const handleClick = (clickedItem: Item) => {
    addToCart({
      item_id: clickedItem.item_id as number,
      image: clickedItem.image,
      name: clickedItem.name,
      price: clickedItem.price,
      quantity: 1,
      type: clickedItem.type,
    });
    doesCartExists();
  };

  return (
    <>
      <Container>
        <h1>Mönster</h1>
        <ToastContainer />
        {items !== null &&
          items.map((item: Item) => (
            <Card key={item.item_id}>
              <h2>{item.name}</h2>
              <Img
                src={`http://localhost:8080${item.image}`}
                alt="bild på projektet"
              />
              <Info>{item.description},</Info>
              <Price>{item.price} kr</Price>

              <OderButton
                type="button"
                value="Handla"
                onClick={() => {
                  handleClick(item);
                }}
              />
            </Card>
          ))}
      </Container>
    </>
  );
}
