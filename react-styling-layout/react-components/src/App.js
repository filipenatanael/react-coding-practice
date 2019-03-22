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
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          />
          <ButtonSubmit value="Sign Up" />
        </FormControl>
    );
  }
}

export default App;
