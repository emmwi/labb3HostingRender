"use client";
import {
  TextInput,
  AddButton,
  UpploadButton,
  AdminCard,
  DescriptionTextArea,
  AdminContainer,
  AdminForm,
} from "../../../components/admin/Admin-Syles/AdminStyles";
import { FormEvent, useState } from "react";

export default function AddProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //funktion för att förhindra att man skickas till backend med submit
  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("http://localhost:8080/project", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("AddProject response not ok ");
      }

      setName("");
      setDescription("");
      alert("produkt uppladdad");
    } catch (error) {
      console.log("error i addproject", error);
    }
  };

  return (
    <>
      <AdminContainer>
        <AdminCard>
          <h2>Lägg till projekt</h2>
          <AdminForm encType="multipart/form-data" onSubmit={handleSumbit}>
            <label>Namn</label>
            <TextInput
              type="input"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Bild:</label>
            <UpploadButton type="file" accept="image/*" name="image" />
            <label>Beskrivning</label>
            <DescriptionTextArea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Beskrivning..."
            />

            <AddButton type="submit" value="Lägg till projekt " />
          </AdminForm>
        </AdminCard>
      </AdminContainer>
    </>
  );
}
