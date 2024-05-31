import styled from "@emotion/styled";
import "@fontsource/italianno";
import { StyledEngineProvider } from "@mui/material";

interface NavUlistProps {
  $isopen: boolean;
}

export const CartContainer = styled.div`
  display: flex;
  justify-content: end;
  padding-right: 1.3em;
  text-decoration: none;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const CartIcons = styled.img`
  width: 2em;
  background: transparent;
`;
export const CartSpan = styled.span`
  font-size: 1.5em;
  /* text-decoration: none; */
  text-decoration: none !important;
`;
export const NavUlist = styled.ul<NavUlistProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: #8ccbc1;
  position: fixed;
  transform: ${({ $isopen }) =>
    $isopen ? "translateX(0)" : "translateX(100%)"};
  top: 0;
  right: 0;
  height: 100vh;
  padding-top: 5.5rem;
  transition: transform 0.3s ease-in-out;

  @media screen and (min-width: 990px) {
    list-style: none;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    background-color: transparent;
    position: relative;
    padding: 0 1em 0 0;
    transform: none;
    border: #85e7db;
    max-height: 5em;
  }
`;
export const Nav = styled.nav`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 990px) {
    flex-direction: row-reverse;
    border-bottom: 2px solid #081a2133;
  }
`;

export const NavList = styled.li`
  font-family: "Italianno", cursive;
  list-style-type: none;
  color: black;
  font-size: 1.85rem;
  background-color: transparent;
  padding: 19px 0px;

  a {
    text-decoration: none;
    color: black;
    background-color: transparent;
    padding-right: 0.5em;
  }
  @media screen and (min-width: 990px) {
    a {
      padding-left: 1em;
    }
  }
`;

export const LogOutButton = styled.input`
  margin-left: 1em;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  color: #310ff0;
  background-image: linear-gradient(
    to right bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
`;
