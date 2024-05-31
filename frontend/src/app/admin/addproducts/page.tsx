"use client";
import AddPattern from "../../../components/admin/Add-Pattern/AddPattern";
import AddProduct from "../../../components/admin/Add-Poduct/AddProduct";

import { AdminContainer } from "../../../components/admin/Admin-Syles/AdminStyles";
export default function addPatternAndProduct() {
  return (
    <>
      <h1>Lägg till Produkt eller Mönster</h1>
      <AdminContainer>
        <AddPattern />
        <AddProduct />
      </AdminContainer>
    </>
  );
}
