/* eslint-disable no-console */

// Minification - Runs webpack config

import {
  buildErrorMessage,
  buildMessage,
  buildSuccessMessage,
  buildWarningMessage
} from './messages/build-message'
import webpack from 'webpack';
import webpackConfigProd from '../webpack.config.prod';

const state = { failure: 1, success: 0 };
process.env.NODE_ENV = webpackConfigProd.mode;

console.log(buildMessage())

webpack(webpackConfigProd).run((err, stats) => {
  if (err) {
    console.log(buildErrorMessage(err));
    return state.failure;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors)
    return jsonStats.errors.map((error) => {
      return console.log(buildErrorMessage(error))
    })

  if (jsonStats.hasWarnings) {
    console.log(buildWarningMessage('Webpack generated the following warnings:'))
    jsonStats.warnings.map((warning) => {
      return console.log(buildWarningMessage(warning))
    })
  }

  console.log(`Webpack stats: ${stats}`)

  console.log(buildSuccessMessage('Built for production and written to /dist!'))

  return state.success;
})
