const chalk = require('chalk');
const moment = require('moment');

class Logger {
  constrcutor(appName) {
    this.appName = (appName || '')
      .toUpperCase()
      .split(' ')
      .join('_');
  }

  log(message, vars) {
    const dateString = moment().format('DD/MM/YYYY HH:mm:ss');

    if (typeof vars === 'string') {
      message += ' ' + chalk.blue(vars);
    } else if (Array.isArray(vars)) {
      message += ' ' + vars.map(p => chalk.blue(p)).join(' | ');
    }

    console.log(chalk.blue(`[${this.appName}]`) + chalk.green(`[${dateString}]`) + `: ${message}`);
  }
}

module.exports = Logger;
