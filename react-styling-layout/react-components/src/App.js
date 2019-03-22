import React, { Component } from 'react';
import FormControl from './components/FormControl';
import InputType from './components/InputType';
import ButtonSubmit from './components/ButtonSubmit';

class App extends Component {
  render() {
    return (
        <FormControl>
          <InputType
            type="text"
            id="first-name"
            name="firstName"
            placeholder="Enter your first name."
            required={true}
          />

          <br />
          <InputType
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password."
            required={true}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            message="Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number."
          />

          <br />
          <InputType
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email."
            required={true}
            message="Must be a valid email address."
          />

          <ButtonSubmit value="Sign Up" />
        </FormControl>
    );
  }
}

export default App;
