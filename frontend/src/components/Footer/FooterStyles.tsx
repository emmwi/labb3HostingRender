import styled from "@emotion/styled";
import "@fontsource/italianno";
export const StyledFooter = styled.footer`
  background: rgb(166, 214, 213);
  background: linear-gradient(
    0deg,
    rgba(166, 214, 213, 1) 0%,
    rgba(166, 214, 213, 1) 54%,
    rgba(250, 235, 215, 1) 68%
  );

  display: flex;

  @media screen and (min-width: 480px) {
  }
`;

export const ContentFooterContainer = styled.div`
  display: flex;
  margin: 4em 0em 0em;
  background: transparent;
`;
export const ContactLink = styled.a`
  background: transparent;
  display: flex;
`;

export const CopyRight = styled.p`
  background: transparent;
  font-family: "Italianno", cursive;
  font-size: 1.5em;
  margin: auto 0.5em;
`;

export const LinkIcons = styled.img`
  width: 2em;
  height: auto;
  background: transparent;
  margin: 2em;
`;
