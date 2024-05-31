import styled from "@emotion/styled";

export const Img = styled.img`
  width: 10rem;
  height: auto;
  border-radius: 1em;
  object-fit: contain;
`;
export const Card = styled.div`
  margin-bottom: 1em;
  padding: 1em;
  border: 2px solid #345b5652;
  border-radius: 1em;
  max-width: 20em;

  @media screen and (min-width: 990px) {
    flex: 11 20em;
    margin: 1em;
  }
`;
export const CardsContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 990px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1em;
  }
`;

export const Container = styled.div`
  margin: auto;
  text-align: center;

  @media screen and (min-width: 990px) {
    /* max-width: ; */
  }
`;

export const Info = styled.p`
  border: 2px solid #345b5652;
  border-radius: 1em;
  font-size: 1.5em;
  padding: 1em;
  margin: auto;
`;
export const Price = styled.p`
  font-size: 2em;
  font-weight: bold;
`;
export const OderButton = styled.input`
  margin: 1em;
  padding: 0.5em;
  font-size: 1em;
  border: 2px solid #345b5652;
  border-radius: 0.5em;
  background-color: #269f99b7;

  &:hover {
    background-color: #1c7a76f0;
    color: #f7f5f1;
    transform: scale(1.1);
  }
  .onClick {
    box-shadow: 34px 10px 64px 2px rgba(89, 89, 89, 1);
  }
`;
