 class PrestadorService {
  constructor(Url, $http) {
    this.$http = $http;
    this.url = Url.urlBase + "/prestador";
  }

  getAll(){
    return this.$http.get(this.url)
  }
}
// PrestadorService.$inject = [];
// export default PrestadorService;
export default ['Url', '$http', PrestadorService];
