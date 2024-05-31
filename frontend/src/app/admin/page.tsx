"use client";
import { useState } from "react";
import {
  TextInput,
  AddButton,
  AdminCard,
  AdminForm,
  AdminContainer,
} from "../../components/admin/Admin-Syles/AdminStyles";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginAdmin() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchAdmin(adminName: string, password: string) {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        adminName: adminName,
        password: password,
      });
      if (response) {
        router.push("/admin/addprojects");
      } else {
        setErrorMessage("Ingen sådan admin finns");
      }
    } catch (error) {
      setErrorMessage("ingen sådan admin finns");
    }
  }

  return (
    <>
      <AdminContainer>
        <AdminCard>
          <h2>Logga In</h2>
          <AdminForm
            onSubmit={(e) => {
              e.preventDefault();
              const adminName = e.currentTarget.adminName.value;
              const password = e.currentTarget.password.value;
              fetchAdmin(adminName, password);
            }}
          >
            <label>Användarnamn</label>
            <TextInput type="input" name="adminName" />
            <label>Lösenord:</label>
            <TextInput type="password" name="password" />
            <AddButton type="submit" value="logga in" />
            {errorMessage && <p>{errorMessage}</p>}
          </AdminForm>
        </AdminCard>
      </AdminContainer>
    </>
  );
}
