#!/usr/bin/env node
const program = require('commander');
const { createComponent } = require('./methods');

program
.command('create-component <type>') // componentName === type
.alias('create')
.option('-r, --reducer [value]', 'create reducer on store.')
.action(function (type, args) {
  console.log('[args.reducer]: ',args.reducer);

  if (typeof type === 'string') {
      console.log(createComponent(
        type.trim()
      ));
  }
});

program.parse(process.argv);
