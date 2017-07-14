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

## Componentes
# Side menu
Componente que renderiza un menu lateral para la navegación interna de la aplicación, se utiliza dentro de la aplicacion de la siguiente manera
```html
<sidemenu menu="$ctrl.menu" config="$ctrl.configMenu"></sidemenu>
```
Estructura de los bindings
```javascript
$ctrl.menu = [
       {state: "app.main.financiador", // ui-router state 
       icon: "user", // material design icon name
       name: "FINANCIADOR"}, // valor pasado a la directiva "translate" para mostrar
       {state: "app.dashboard.usuarios", icon: "people", name: "USUARIOS"}
     ];
$ctrl.configMenu = {
       class: ["md-sidenav-left", "md-whiteframe-4dp"], // ng-class  general
       //https://material.angularjs.org/latest/api/directive/mdSidenav
       disableScrollTarget: "body", 
       isOpen: true,
       isLockedOpen: true,
       componentId: 'right',
       toolbar: { // barra superior en el menu, opcional
         class: ["md-theme-light", "md-hue-1"],
          text: "Financiador"
       }
     };
```