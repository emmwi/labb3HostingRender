"use client";

import Link from "next/link";
import {
  Nav,
  NavList,
  NavUlist,
  LogOutButton,
} from "../Navbar-Styles/NavbarSyles";
import Burger from "../BurgerMenu/Burger";
import { useBurgerMenuContext } from "../BurgerMenu/BurgerMenuContext";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarAdmin() {
  //Tar emot värde för isOpen från usecontext
  const { isopen, toggle } = useBurgerMenuContext();
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function deleteToken() {
    try {
      const response = await axios.post("http://localhost:8080/logout");
      if (response) {
        router.push("/admin");
        console.log("utloggad");
      }
    } catch (error) {
      setErrorMessage("det gick inte att logga ut");
    }
  }
  return (
    <>
      <Nav>
        <Burger />
        {/* skickar props till styled component för navbar och specifikt navbarul */}
        <NavUlist $isopen={isopen}>
          <NavList>
            <Link href="/admin/addproducts" onClick={toggle}>
              Lägg till Produkt
            </Link>
          </NavList>
          <NavList>
            <Link href="/admin/addprojects" onClick={toggle}>
              Lägg till Projekt
            </Link>
          </NavList>
          <NavList>
            <Link href="/admin/vieworders" onClick={toggle}>
              Översikt Beställningar
            </Link>
          </NavList>
          <NavList>
            <Link href="/admin/viewproducts" onClick={toggle}>
              Översikt Produkter
            </Link>
          </NavList>
          <NavList>
            <Link href="/admin/viewprojects" onClick={toggle}>
              Översikt Projekt
            </Link>
          </NavList>
        </NavUlist>
      </Nav>
      <LogOutButton
        type="button"
        value="logga ut"
        onClick={() => {
          deleteToken();
        }}
        {...(errorMessage && <p>{errorMessage}</p>)}
      />
    </>
  );
}
