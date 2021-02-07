<h1>Exemplos de Agendamento de tarefas com Node Cron</h1>

<h2> 🕐 Sobre o Node Cron</h2>
O cron fornece uma maneira de repetir uma tarefa em um intervalo de tempo específico. Pode haver tarefas repetitivas, como registro e execução de backups, que precisam ocorrer diariamente ou semanalmente.

</br>

> Cada asterisco que faz parte da sintaxe do cron representa diferentes unidades de tempo como mostrado abaixo : 

```text
  * * * * * *
  | | | | | |
  | | | | | Dia da Semana
  | | | | Mês 
  | | | Dia do Mês 
  | | Hora 
  | Minuto 
  Segundo ( este campo é opcional )
```

<h3>Tabela de valores utilizados nos asteriscos </h3>

Campo         | Valores
------------- | ---------------------------------------
Segundo       | 0 - 59
Minuto        | 0 - 59
Hora          | 0 - 23 
Dia do Mês    | 1 - 31
Mês           | 1 - 12
Dia da Semana | 0 - 7 ( ou nomes, 0 ou 7 são Domingo )

</br>

> <h3> ⏲️ Passando mais de um valor por parâmetro</h3>
```js
// Declaração da biblioteca
var cron = require ('node-cron') ; 
//  
cron.schedule ('1,2,4,5 * * * * ' , ( ) => {   
  console.log ( 'executando a cada minuto 1, 2, 4 e 5') ;
});
```

> <h3> ⏲️ Passando Intervalos de Valores </h3>
```js
var cron = require('node-cron');
 
cron.schedule('1-5 * * * *', () => {
  console.log('Executando a cada minuto para 1 de 5');
});
```

> <h3> ⏲️ Passando Valores de Etapa </h3>
```js
var cron = require('node-cron');
 
cron.schedule('*/2 * * * *', () => {
  console.log('Executando a tarefa a cada 2 minutos');
});
```

> <h3> ⏲️ Passando Nomes </h3>
```js
// Usando os Nomes 
var cron = require('node-cron');
 
cron.schedule('* * * January,September Sunday', () => {
  console.log('Executando aos Domingos de Janeiro e Setembro');
});
```
```js
// Usando os Nomes curtos 
var cron = require('node-cron');
 
cron.schedule('* * * Jan,Sep Sun', () => {
  console.log('Executando aos Domingos de Janeiro e Setembro');
});
```

<h2> ⏰ Conhecendo os Métodos</h2>

Argumentos    | Tipo         | Descrição                           | Exemplo 
------------- | ------------ | ----------------------------------- | ----------------
expression    | string       | Expressão Cron                      | ( * * * * * * )
function      | Function     | Função que executará a Tarefa       | function ( ) { }
options       | Object       | Configuração opcional para agendamento das tarefas | Scheduled / Timezone

</br>

Options       | Tipo         | Descrição                                  | Exemplo 
------------- | ------------ | ------------------------------------------ | ----------------
scheduled     | boolean      | Define se a tarefa criada é agendada ( Padrão = True )                                           | scheduled: true
timezone      | timezone     | Timezone que será usada para o agendamento | timezone: "America/Sao_Paulo"

</br>

<h2> ⏰ Métodos ScheduledTask</h2>

> Iniciar um Agendamento
```js
/* 
 * Inicia a tarefa agendada.
 */ 
var cron = require('node-cron');
 
var task = cron.schedule('* * * * *', () =>  {
  console.log('Tarefa Parada');
}, {
  // Esta valor é opcional ele por padrão vem True
  scheduled: false
});

// Inicializa o Agendamento 
task.start();
```
> Finalizar um Agendamento
```js
/* 
 * A tarefa não será executada a menos que seja reiniciada.
 */ 
var cron = require('node-cron');
 
var task = cron.schedule('* * * * *', () =>  {
  console.log('Executando a cada minuto até parar');
});

// Finaliza um agendamento 
task.stop();
```

> Destruir um Agendamento
```js
/* 
 * A tarefa será interrompida e completamente destruída
 */ 
var cron = require('node-cron');
 
var task = cron.schedule('* * * * *', () =>  {
  console.log('Não executará mais nem será capaz de reiniciar');
});

// Destrói o Agendamento 
task.destroy();
```


> Validar um Agendamento
```js
/* 
 * Valida se a string fornecida é uma expressão cron válida.
 */ 
var cron = require('node-cron');
 
var valid = cron.validate('59 * * * *');
var invalid = cron.validate('60 * * * *');
```

____

<h2> 💎 Sobre os Exemplos</h2>

<h3> 💻 Exemplo 1 - Agendamento para execução minuto à minuto</h3>

* Nesse agendamento ao passar todos os asteriscos sem informar parâmetro algum, o cron o toma como padrão sendo assim a função que será executada dentro do schedule será executada minuto a minuto;

<h3> 💻 Exemplo 2 - Agendamento de Exclusão de logs</h3>

* 

<h3> 💻 Exemplo 3 - Backup Agendado de Banco SQLite</h3>

* Nesse agendamento ele faz um Backup do Banco SQLite as 23:59 diariamente, se o backup for bem sucedido ele informa uma mensagem caso contrário e apresente erro ele será encerrado, para fazer o backup do sqlite é usada a biblioteca shelljs que faz a execução de um script shell para efetuar o backup dos dados;

<h3> 💻 Exemplo 4 - Agendamento de Envio de Emails</h3>

* Nesse agendamento temos o envio de emails automáticos toda quarta-feira;
* É criada uma criada uma variável transportadora que contenha todas as configurações para envio de email;
* É criada uma variável com as configurações da mensagem;  
* É criado o processo de envio de email onde são instanciadas as variáveis acima, com as configurações de email e da mensagem a sere enviada, contendo um controle de erros;   


<h2> ⚙️ Tecnologias</h2>

* [Visual Studio Code](https://code.visualstudio.com/) - IDE
* [NodeJS](https://nodejs.org/en/) - Ambiente de execução JavaScript

<h3> ⚙️ Bibliotecas</h3>

 * [express](https://expressjs.com/pt-br/) - Framework para desenvolvimento Web 
 * [node-cron](https://www.npmjs.com/package/node-cron) - Pacote para agendamento de tarefas
 * [fs](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) - Pacote para manipulação de arquivos
 * [shelljs](https://www.npmjs.com/package/shelljs) - Pacote para execução de comandos shell
 * [nodemailer](https://www.npmjs.com/package/nodemailer) - Pacote para envio de Emails

<h3> ⚙️ Rodando os projetos</h3>



<h3> 🎲 Rodando os Exemplos</h3>

Serve para todos os exemplos : 

```bash
# Clone este repositório dos exemplos ( aqui ja possui todos os exemplos )
$ git clone https://github.com/brunoemferreira/NodeJS-Cron-Jobs.git
```

<h4>Exemplo 1</h4>

```bash
# execute o comando
$ node example1.js
```

<h4>Exemplo 2</h4>

```bash
# execute o comando
$ node example2.js
```

<h4>Exemplo 3</h4>

```bash
# execute o comando
$ node example3.js
```

<h4>Exemplo 4</h4>

```bash
# execute o comando
$ node example4.js
```

<h3>Referências</h3>

* [Node Cron](https://www.npmjs.com/package/node-cron) - NPM
* [DigitalOcean](https://www.digitalocean.com/community/tutorials/nodejs-cron-jobs-by-examples) - How To Use node-cron to Run Scheduled Jobs in Node.js

---
⌨️ com ❤️ por [Bruno Eduardo](https://gist.github.com/brunoemferreira) 😊
