import React, { Component } from 'react';
import FormControl from './components/FormControl';
import InputType from './components/InputType';

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
        </FormControl>
    );
  }
}

export default App;
