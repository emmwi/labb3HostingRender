"use client";
import Link from "next/link";
import { LogoImg, HeaderSyle, LogoName, HeaderDiv } from "./HeaderStyles";

export default function Header() {
  return (
    <>
      <HeaderDiv>
        <Link href={"/"}>
          <HeaderSyle>
            <LogoImg
              src="/palett2Small.jpg"
              alt="logo, black cat with rainbowcolor on maine"
            />
            <LogoName>Palettprinsessan</LogoName>
          </HeaderSyle>
        </Link>
      </HeaderDiv>
    </>
  );
}
