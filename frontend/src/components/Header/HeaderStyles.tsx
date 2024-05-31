import styled from "@emotion/styled";

export const HeaderSyle = styled.header`
  /* background: linear-gradient(
    180deg,
    #a6d6d5e1 41%,
    #a6d6d5b3 54%,
    #faebd7c2 76%
  ); */
  background: linear-gradient(
    180deg,
    rgba(166, 214, 213, 1) 0%,
    rgba(166, 214, 213, 1) 64%,
    rgba(250, 235, 215, 1) 90%
  );
  display: flex;
`;
export const LogoName = styled.h1`
  background-color: transparent;
  margin: auto 0.5em;
`;

export const LogoImg = styled.img`
  height: auto;
  width: 5rem;
  border-radius: 100%;
  margin-left: 0;
`;

export const HeaderDiv = styled.div`
  a {
    text-decoration: none;
  }
`;
