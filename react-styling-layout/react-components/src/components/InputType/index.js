import React, { Component } from 'react';
import styled from 'styled-components';

import CheckIcon from '../../assets/images/CheckIcon.svg';


export default class InputType extends Component {
  render() {
    const { type, id, name, placeholder, required, pattern, message } = this.props;
    return (
      <Container>
        {/* placeholder=" " */}
        <Input
          type={type}
          id={id}
          name={name}
          placeholder=" "
          required={required}
          pattern={pattern}
        />
          <Label htmlFor={id}>
            {placeholder}
          </Label>
          {type === "email" || type === "password"
            ? <Requirements className="requirements">
                {message}
              </Requirements>
            : null
          }
      </Container>
    );
  }
}

const Requirements = styled.div`
  padding: 0 30px 0 50px;
  color: #999;
  max-height: 0;
  transition: 0.28s;
  overflow: hidden;
  color: red;
  font-style: italic;
`;

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
    & + label {
      opacity: 0;
    }
  }

  &:valid {
    background: url(${CheckIcon});
    background-size: 20px;
    background-repeat: no-repeat;
    background-position: 20px 20px;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
    & + label {
      opacity: 0;
    }
  }

  &:invalid:focus:not(:placeholder-shown) {
    & ~ .requirements {
      max-height: 200px;
      padding: 0 30px 20px 50px;
    }
  }
`;
