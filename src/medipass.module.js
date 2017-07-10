import './medipass.css';

// aun no logro hacer que esto funcione, estudiando posibilidades
// import angular from 'angular';
// import {default as AccessModule} from "./access";
// import {default as ComponentsModule} from "./components";
// export angular.module('MedipassBase',[AccessModule, ComponentsModule]).name;
// export AccessModule;
// export ComponentsModule;

//Asi funciona para exportar multiples modulos por separado
export {default as AccessModule} from "./components/access.module";
export {default as ComponentsModule} from "./components";
