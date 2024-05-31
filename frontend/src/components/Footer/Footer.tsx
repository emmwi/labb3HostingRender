"use client";
import {
  StyledFooter,
  CopyRight,
  LinkIcons,
  ContactLink,
  ContentFooterContainer,
} from "./FooterStyles";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <ContentFooterContainer>
          <CopyRight>©Emma With 2024</CopyRight>
          <ContactLink href="https://www.instagram.com/palettprinsessan/">
            <LinkIcons
              src="square-instagram.svg"
              alt="link to instagram account"
            />
          </ContactLink>
          <ContactLink href="argus_92@hotmail.com">
            <LinkIcons src="envelope-solid.svg" alt="link to email" />
          </ContactLink>
        </ContentFooterContainer>
      </StyledFooter>
    </>
  );
}
