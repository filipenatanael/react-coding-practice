import React from 'react';
import styled from 'styled-components';

const Button = styled.input`
  display: block;
  width: 100%;
  margin: 20px 0;
  background: #41d873;
  color: white;
  border: 0;
  padding: 20px;
  font-size: 1.2rem;
`;

export default function ButtonSubmit({ value }) {
  return (
    <Button type="submit" value={value} />
  );
}
