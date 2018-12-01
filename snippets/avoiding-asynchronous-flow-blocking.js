import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURl = 'http://api.github.com'
});

class App extends Component {

  // This a incorrent way
  async componentDidMount() {
    const user = await api.get('users/filipenatanael');
    const repos = await api.get('users/filipenatanael/repos');
  }

  // This a corrent way
  async componentDidMount() {
    const [user, repos] = await Promise.all([
      api.get('users/filipenatanael');
      api.get('users/filipenatanael/repos');
    ]);
  }
  
}
