import React, { Component } from 'react';
import styled from 'styled-components';

import CheckIcon from '../../assets/images/CheckIcon.svg';


export default class InputType extends Component {
  render() {
    const { type, id, name, placeholder, required } = this.props;
    return (
      <Container>
        <Input
          type={type}
          id={id}
          name={name}
          placeholder=""
          required={required}
        />
          <Label htmlFor={name}>
            {placeholder}
          </Label>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  background: white;
  border-bottom: 1px solid #ccc;
`;

const Label = styled.label`
  opacity: 0.3;
  font-weight: bold;
  position: absolute;
  top: 22px;
  left: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 20px 20px 20px 50px;
  background: #eee;

  &:focus {
    outline: 0;
    background: white;
  }

  &:focus + label {
    opacity: 0;
  }

  &:valid {
    background: url(${CheckIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
  }

  &:valid + label {
    opacity: 0;
  }

  &:invalid:not(&:focus):not(&:placeholder-shown) {
    background: pink;
  }

  &:invalid:not(&:focus):not(&:placeholder-shown) + label {
    opacity: 0;
  }

  &:invalid:focus:not(:placeholder-shown) ~ .requirements {
    max-height: 200px;
    padding: 0 30px 20px 50px;
  }
`;
