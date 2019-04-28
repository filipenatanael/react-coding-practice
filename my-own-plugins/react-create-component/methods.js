const fs = require('fs');
require('dotenv').config();
const { capitalize } = require('./helpers/');
// console.log(process.env.COMPONENT_DIR);

const createComponent = (name, options={ extension: 'js' }) => {
  let upperName = capitalize(name);
  let directory_files =  `${process.env.COMPONENT_DIR}\/${upperName}.${options.extension}`;

let template = `import React, { Component } from 'react';

class ${upperName} extends Component{
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default ${upperName};
`;

  fs.appendFile(directory_files, template, function (err) {
    if (err) throw err;
    console.log('Component was created!');
  });
}


module.exports = {
  createComponent
};
