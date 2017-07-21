export default class PrestadorService {
  constructor(Url, $http) {
    'ngInject';
    this.$http = $http;
    this.url = Url.urlBase + "/prestador";
  }

  getAll(){
    return this.$http.get(this.url)
  }
}
