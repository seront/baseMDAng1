import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './usuarios.routes';
import UsuariosController from './usuarios.controller';
import UsersService from '../services/users.service';

export default angular.module('app.usuarios', [uirouter,UsersService])
  .config(routing)
  .controller('UsuariosController', UsuariosController)
  .name;
