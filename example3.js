const cron = require('node-cron');
const express = require('express');
const shell = require('shelljs');

// Instanciar o Express
app = express();

// Efetua o Backup do Banco SQLite todos os dias às 23:59.
cron.schedule('59 23 * * *', function () {
  console.log('---------------------');
  console.log('Rodando Cron Job');
  if (shell.exec('sqlite3 database.sqlite .dump > data_dump.sql').code !== 0) {
    shell.exit(1);
  }
  else {
    shell.echo('Backup de Dados efetuado com sucesso!!');
  }
});

// porta onde o serviço escuta
app.listen(3000);

