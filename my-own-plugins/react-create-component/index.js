#!/usr/bin/env node
const program = require('commander');

const { createComponent } = require('./methods');
/*******************************************/

program
.command('create-component') //
.alias('create')
.option('--name', 'create component with name.')
.option('--reducer', 'create reducer on store.')
// .description('List coffee menu') // command description

// function to execute when command is uses
.action(function (name, reducer) {
  //let componentName = (name ? name+"Component" : 'HelloComponent1');
    console.log(typeof name);
    console.log(reducer);
  if (typeof name === 'string') {
      console.log(createComponent('myComponent'));
  }

  if (typeof reducer === 'string') {
    console.log(createComponent('myReducer'));
  }
  //console.log(create(componentName));
});

// allow commander to parse `process.argv`
program.parse(process.argv);
