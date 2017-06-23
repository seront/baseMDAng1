# js-dev-env
Javascript developer enviroment

## Editor 
* https://code.visualstudio.com/

### Editorconfig
Instalar plugin en visualstudio
* https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

## Install Node & NPM
* https://nodejs.org/es/
* https://www.npmjs.com/

### Instalar librerías nodes
* npm install

### Podemos verificar vulnerabildiades con nsp check
* npm install nsp --global
* nsp check

## Localtunnel setup
* npm install localtunnel -g
* node buildScripts/srcServer.js
* lt --port 3000
* lt --port 3000 --subdomain patricio

Tarea, usar browsersync para testear diferentes dispositivos


## Automation : NPM Scripts
Leer más en bit.ly/npmvsgulp
* npm start
* npm run share

## Transpiling 
Articulo interesante: 
* https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them
Usaremos Babel
* .babelrc


## Bundle 
* CommonJS no funciona en los Web Browser
* Podemos hacer un solo archivo con toda la aplicación
* Aumentando la velocidad en el browser 
* Podemos aumentar el rendimiento en NodeJS, ya que Node Require es lento, luego al hacer bundle podemos compilar los requires y aumentar el rendimiento

### Definición de módulos
Existen muchas formas de definir módulos, las cuales se presentan a continuación, la que usaremos será **ES6**
##### Módulos globales (Pasado)
```javascript
myGloba;
```
##### Módulos IIFE (Pasado)
```javascript
(function(){
    //my code
})();
```
##### Módulos AMD (Pasado)
```javascript
define(['moduleX'],function(moduleX){
})
```
##### Módulos CommonJS (Pasado)
```javascript
var jquery = require("jquery");
```
##### Módulos ES6 (Hoy)
```javascript
import jquery from "jquery";
```

### Webpack para hacer bundle
¿Por qué? 
* Maneja más que solo JS
    * JS
    * Imagenes
    * CSS
    * HTML
* O sea maneja imagenes, css, etc. 
* Incluye hot-reloading web server 
* Maneja tree shaking https://webpack.js.org/guides/tree-shaking/
* Code splitting https://webpack.github.io/docs/code-splitting.html

### ¿Cómo hacer debuggin de nuestro código?
#### Sourcemaps
```javascript 
{
devtool: 'inline-source-map'
...
```

## Linting 
### ESLint
¿Por qué? 
* Consistencia
  * Feedback rápido 
  * Eliminar confirm/alert
  * Eliminar Trailing commas
  * Variables globales
  * eval
* Evitar errores 
  * Extra parentesis
  * Overwriting function
  * Assignment in conditional 
  * No poner caso default en un switch
  * Dejar debugger / console.log en producción -.- 

#### Configuración file 
Existen muchas posibilidades, usaremos **.eslintrc.json**
bit.ly/jsdeveslint
```javascript
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {

  }
}
```
#### ¿Cuales reglas debo usar?
http://eslint.org/docs/rules/  Es necesario una reunión con el equipo para decidir

#### Que reglas son errores o advertencias 
Advertencias (warinings)
* Puedes seguir desarrollando
* Pueden ser ignoradas
* El equipo debe comprometerse a arreglar los warnings
Errores 
* Rompe la construcción 
* No pueden ser ignoradas
* El equipo se ve obligado a cumplirlas

#### ¿Qué plugins debo usar? 
Básicamente depende de la tecnología, en nuestro caso usaremos 
* eslint-plugin-node
* eslint-plugin-angular

#### Preset hechos?
* https://github.com/sindresorhus/eslint-config-xo
* https://github.com/standard/eslint-config-standard

## Unit Testing 
### Framework 
* Mocha
* Jasmine
* Tape 
* QUnit
* AVA 
* Jest

Usaremos Mocha 

### Assertion Library 
Declarar lo que esperamos! 
```javascript 
expect(2+2).to.equeal(4)
assert(2+2).equeal(4)
``` 
* expect 
* chai 
Usaremos Chai
### Helper Libraries
* JSDOM : Simula browser
* Cheerio : jQuery for the server 
### Where to run tests
* Browser
    * Karma, Testem
* Headless Browser
    * PhantomJS
* In-memory DOM
    * JSDOM 
Usaremos JSDOM

### Where to place tests
#### Centralizado 
* Menos ruido en src folder
* Deployment confusion

#### Alongside
* Easy import 
* Clear visibility
* Convenient to open
* No recreating folder structure

fileName.test.js

#### When to run tests
Cuando guardo! 
* Rapid feedback
* Facilitates TDD
* Automatic = Low friction
* Increases test visibility

## Continuous Integration
* Construye tu aplicación automáticamente cuando se hace un commit
* Corre tus tests
* Check code coverage
* Automate deployment

Servidores? 
* Travis
* Appveyor
* Jenkins (Usaremos Jenkins)


## HTTP Calls

Node :
* http
* request

Browser : 
* XMLHttpRequest
* jQuery
* Fetch

Node & Browser :
* isomorphic-fetch
* xhr
* SuperAgent
* Axios

Usaremos Axios :) 


### Centralizar las llamadas a la API
¿Por qué?
* Configuramos todas las llamadas en un solo lugar (métodos de autenticación, etc)
* Manejo de lógica de preloading (básicamente para monitorear) 
* Manejo de errores
* Podemos centralizar el manejo de los mocks! :) 


## Mock HTTP 
¿Por qué? 
* Unit testing
* Respuestas inmediatas
* Funciona aún cuando los servicios estén abajo
* Prototipeo rápido
* Evitar cueyos de botella
* Permite trabajar sin internet


### Mock API 
Usaremos 
* JSON Schema Faker http://json-schema-faker.js.org/#gist/eb11f16c9edccf040c028dc8bd2b1756
* JSON Server 
* faker.js, chance.js , randexp.js 

bit.ly/ps-mock-data-schema
