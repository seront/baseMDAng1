
export default  class UsuariosController {
  constructor($scope,UsersService) {
    var self = this;
    self.usuarios = [];
    UsersService.getUsers().then(function(users){
      self.usuarios = users;
      $scope.$apply();
    });

  }
  changeUsuarios(usuarios) {
    this.usuarios = usuarios;
  }
}

UsuariosController.$inject = ['$scope','UsersService'];
