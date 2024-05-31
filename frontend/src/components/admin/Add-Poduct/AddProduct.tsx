import {
  TextInput,
  AddButton,
  UpploadButton,
  AdminCard,
  DescriptionTextArea,
  AdminForm,
  AdminContainer,
} from "../Admin-Syles/AdminStyles";
import { FormEvent, useState } from "react";

export default function AddKnitwear() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //funktion för att förhindra att man skickas till backend med submit
  const handleSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("http://localhost:8080/knitwear", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("AddKnitwear response not ok ");
      }

      setName("");
      setDescription("");
      alert("Knitwear uppladdad");
    } catch (error) {
      console.log("error i AddKnitwear", error);
    }
  };

  return (
    <>
      <AdminContainer>
        <AdminCard>
          <h2>Lägg till Stickat Plagg</h2>
          <AdminForm encType="multipart/form-data" onSubmit={handleSumbit}>
            <label>Namn</label>
            <TextInput
              type="input"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Bild:</label>
            <UpploadButton type="file" accept="image/*" name="image" />
            <label>Beskrivning</label>
            <DescriptionTextArea
              name="description"
              placeholder="Beskrivning..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Pris:</label>
            <TextInput type="input" name="price" />
            <AddButton type="submit" value="Lägg till projekt " />
          </AdminForm>
        </AdminCard>
      </AdminContainer>
    </>
  );
}
