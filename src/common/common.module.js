import angular from 'angular';
import material from 'angular-material'

import './validador-rut/angular-rut.js';
import {default as milesFilter} from './filters/miles'
import {default as capitalize} from './filters/capitalize'
import {default as HeaderModule} from './header/header.module';
import ToastService from './service/toasts.service';

export default angular.module('medipass.common', [material,
HeaderModule,
'platanus.rut'
])
.service("ToastsService", ToastService)
.filter("miles", milesFilter)
.filter("capitalize", capitalize)
.name;
