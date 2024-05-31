"use client";
import NavbarAdmin from "./navbar-admin/NavBarAdmin";
import NavbarClient from "./navbar-client/NavbarClient";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  // Använd useRouter-hooken för att hämta aktuell URL
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/admin") {
    return null;
  }
  // Kolla om adressparametern är "/admin"
  const isAdminRoute = pathname.startsWith("/admin");

  // Returnera NavbarAdmin bara om adressparametern är "/admin"
  return <>{isAdminRoute ? <NavbarAdmin /> : <NavbarClient />}</>;
}
