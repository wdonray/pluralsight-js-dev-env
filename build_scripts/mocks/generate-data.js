/* eslint-disable import/named */
/* eslint-disable no-console */

import { extend, generate } from 'json-schema-faker';
import chalk from 'chalk';
import fs from 'fs';
import { schema } from './data-schema';

// Extend JSF with the fake libs you want to use
extend('faker', () => {
  return require('faker')
});

const json = JSON.stringify(generate(schema));

fs.writeFile('./src/services/api/db.json', json, (err) => {
  if (!err) {
    console.log(chalk.green('Mock data generated.'))
    return;
  }

  return console.log(chalk.red(err))
})
