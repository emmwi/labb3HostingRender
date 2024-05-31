import styled from "@emotion/styled";

export const TextInput = styled.input`
  margin-right: 1em;
  border-radius: 0.5em;
  border-color: #30291f5e;
  color: #30291f;
  margin-bottom: 1em;
`;
export const DescriptionTextArea = styled.textarea`
  margin-right: 1em;
  border-radius: 0.5em;
  border-color: #30291f5e;
  color: #30291f;
  margin-bottom: 1em;
`;

export const AddButton = styled.input`
  font-size: 1em;
  border-radius: 0.5em;
  background: #b1cfbe;
  color: #30291f;
  max-width: 10em;
  margin: 1em auto;
`;

export const UpploadButton = styled.input`
  font-size: 1em;
  margin: 1em 0;

  &::file-selector-button {
    border-radius: 0.5em;
    background: #b1cfbe;
    color: #30291f;
    font-style: italic;
  }
`;

export const AdminForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em 0em;
  border-bottom: 2px solid #302f2f71;
`;

export const AdminCard = styled.div`
  max-width: 15em;
  margin: auto;
  border: 2px solid #302f2f71;
  padding: 2em;
  margin-bottom: 1em;
  border-radius: 1em;

  @media screen and (min-width: 990px) {
    margin: 0 1em;
    justify-content: center;
  }
`;
export const AdminContainer = styled.div`
  max-width: 60vw;
  @media screen and (min-width: 990px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 60vw;
  }
`;
