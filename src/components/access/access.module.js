import angular from 'angular';
import ngMaterial from 'angular-material';
import {AccessComponent} from './access.component';
import {AccessLogin} from './access-login/access-login.component';
// import {default as AccessLoginModule} from './access-login/access-login.module.js';
import {default as AccessRecuperarModule} from './access-recuperar/access-recuperar.module.js';
import {default as routes} from './access.routes';
import { AccessService } from './access.service';

export default angular.module('medipass.access', [
  ngMaterial,
// AccessLoginModule,
AccessRecuperarModule
])
.component('access', AccessComponent)
.component('accessLogin', AccessLogin)
.service('AccessService', AccessService)
.config(routes)
.name;
