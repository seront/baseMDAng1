# Aviso
este repositorio es un fork de 
https://github.com/psotoulloa/js-dev-env
revise primero antes de comenzar con este repositorio en forma de desarrollo

## Guia de estilo

Sigamos los parametros sugeridos aqui https://github.com/toddmotto/angularjs-styleguide

##Instalar como libreria
Este repositorio contiene una serie de modulos donde se encuentran tanto componentes separados (headers, footers, sidebar) 
como modulos genericos integrados como el "Access", donde se encuentran las vistas integradas de Login, Recuperar contraseña entre otras ya maquetadas.
Para instalar ejecute

npm -i https://github.com/seront/medipass-base.git --save

luego importe las dependencias en el archivo principal de la aplicación

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/medipass-base/lib/medipass-base.css';

import {AccessModule} from 'medipass-base'; //Veáse lista de modulos al final de esta documentación
```
y en el modulo principal de la aplicación
```javascript
let app = angular.module('app', [AccessModule])
```
y ya tenemos todas las vistas que se encuentran en el modulo Access en nuestra aplicación tan solo con ir a /login,
pues trae las rutas ya configuradas
## Como crear componentes y modulos base
proximamente individuos

