import styled from "styled-components"; //använder styled här för att emotion ger error

//tar emot props från burger som i sin tur hämtar den från usecontext
interface BurgerMenuProps {
  $isopen: boolean | string;
}
export const BurgerMenu = styled.div<BurgerMenuProps>`
  width: 2rem;
  height: 2rem;
  position: absolute; //fixed om den ska följa med kolla om den kan döljas vid scroll down och synas vid scroll up
  top: 4em;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: transparent;
  z-index: 20;
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ $isopen }) => ($isopen ? "#0d4e6b" : "#175855")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ $isopen }) => ($isopen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ $isopen }) =>
        $isopen ? "translateX(100% )" : "translateX(0 )"};
      opacity: ${({ $isopen }) => ($isopen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ $isopen }) => ($isopen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media screen and (min-width: 990px) {
    display: none;
  }
`;
