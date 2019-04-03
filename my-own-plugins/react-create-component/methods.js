const fs = require('fs');

require('dotenv').config();

console.log(process.env.COMPONENT_DIR);


const createComponent = (name, options={ extension: 'js' }) => {
  let directory_files =  `${process.env.COMPONENT_DIR}\/${name}.${options.extension}`;
  // 'components/'+component_name+'.js';
console.log(directory_files);
  let template = `<template>
    <div>
      Hello World!
    <div>
  </template>

  <script>
  export default {
    name: ${name}
    data () {
      return {
        greeting: 'Hello'
      }
    }
  }
  </script>

  <style>
  </style>`;

  fs.appendFile(directory_files, template, function (err) {
    if (err) throw err;
    console.log('Component was created!');
  });
}


module.exports = {
  createComponent
};
