<h1>Exemplos de Agendamento de tarefas com Node Cron</h1>

<h2> 🕐 Sobre o Node Cron</h2>
O cron fornece uma maneira de repetir uma tarefa em um intervalo de tempo específico. Pode haver tarefas repetitivas, como registro e execução de backups, que precisam ocorrer diariamente ou semanalmente.

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
  console.log('running every minute to 1 from 5');
});
```

> <h3> ⏲️ Passando Valores de Etapa </h3>
```js
var cron = require('node-cron');
 
cron.schedule('*/2 * * * *', () => {
  console.log('running a task every two minutes');
});
```

> <h3> ⏲️ Passando Nomes </h3>
```js
// Usando os Nomes 
var cron = require('node-cron');
 
cron.schedule('* * * January,September Sunday', () => {
  console.log('running on Sundays of January and September');
});
```
```js
// Usando os Nomes curtos 
var cron = require('node-cron');
 
cron.schedule('* * * Jan,Sep Sun', () => {
  console.log('running on Sundays of January and September');
});
```

<h2> ⏰ Conhecendo os Métodos</h2>
Argumentos : 

* expression


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
  console.log('will execute every minute until stopped');
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
  console.log('will not execute anymore, nor be able to restart');
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

<h3>Exemplo 1 - </h3>
<h3>Exemplo 2 - </h3>
<h3>Exemplo 3 - </h3>


<h2> ⚙️ Tecnologias</h2>

* [Visual Studio Code]() - IDE
* [NodeJS]() - 

<h3> ⚙️ Bibliotecas</h3>

 * [express]() - 
 * [node-cron](https://www.npmjs.com/package/node-cron) - Pacote para agendamento de tarefas
