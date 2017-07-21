import angular from 'angular';
import ngMaterial from 'angular-material';
import UrlModule from '../../url.service';
import {AccessComponent} from './access.component';
import {AccessLogin} from './access-login/access-login.component';
// import {default as AccessLoginModule} from './access-login/access-login.module.js';
import {default as AccessRecuperarModule} from './access-recuperar/access-recuperar.module.js';
import {default as routes} from './access.routes';
import { AccessService } from './access.service';

export default angular.module('medipass.access', [
  ngMaterial,
  UrlModule,
// AccessLoginModule,
AccessRecuperarModule
])
.component('access', AccessComponent)
.component('accessLogin', AccessLogin)
.factory('AccessService', AccessService)
.config(routes)
.config(($httpProvider)=>{
  'ngInject';
  if (!$httpProvider.defaults.headers.post) {
        $httpProvider.defaults.headers.post = {};
    }

    // Answer edited to include suggestions from comments
    // because previous version of code introduced browser-related errors
    // extra
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.defaults.headers.post['Cache-Control'] = 'no-cache';
    // $httpProvider.defaults.headers.post['content-type'] = 'application/json';
    // $httpProvider.defaults.headers.post['Pragma'] = 'no-cache';
})
.name;
