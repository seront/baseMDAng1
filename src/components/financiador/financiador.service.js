export default class FinanciadorService {
  constructor(Url, $http) {
    'ngInject';
    this.$http = $http;
    this.url = Url.urlBase + "/financiador";
  }

  getAll(){
    return this.$http.get(this.url)
  }
}
