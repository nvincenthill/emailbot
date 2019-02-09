import React from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div`
  margin: 0.25rem auto;
`;

const Label = styled.label`
  margin: 0.5rem auto;
  font-size: 1.25rem;
  font-weight: 700;

  input,
  select,
  textarea {
    display: block;
    margin: 0.5rem auto;
    min-width: 35vw;
  }

  textarea {
    min-width: calc(100vw - 5rem);
  }
`;

const StyledLabel = ({ children }) => (
  <LabelContainer>
    <Label>{children}</Label>
  </LabelContainer>
);

export default StyledLabel;
