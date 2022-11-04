import chalk from 'chalk';

export const buildMessage = () => {
  return chalk.blue('Generating minified bundle for production...')
}

export const buildErrorMessage = (err) => {
  return chalk.red(err)
}

export const buildWarningMessage = (warning) => {
  return chalk.yellow(warning);
}

export const buildSuccessMessage = (success) => {
  return chalk.green(success);
}
