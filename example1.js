const cron = require('node-cron');
const express = require('express');

// Instanciar o Express
app = express();

// quando a função do crontab recebe os 5 asteriscos ( '* * * * *' ) quer dizer que ela funcionará de forma padrão efetuando a execução a cada minuto
cron.schedule('* * * * *', function () {
  console.log('Executa uma tarefa a cada minuto');
})

// porta onde o serviço escuta
app.listen(3000);

