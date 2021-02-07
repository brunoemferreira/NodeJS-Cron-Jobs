const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

// Instanciar o Express
app = express();

// remove o arquivo de log de erro ( error.log ) todo vigésimo primeiro dia do mês.
cron.schedule('0 0 21 * *', function () {
  console.log('---------------------');
  console.log('Rodando Cron Job');
  fs.unlink('./error.log', err => {
    if (err) throw err;
    console.log('Arquivo de Erro Excluído com Sucesso!!!');
  });
});

// porta onde o serviço escuta
app.listen(3000);

