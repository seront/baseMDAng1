 class FinanciadorService {
  constructor(Url, $http) {
    this.$http = $http;
    this.url = Url.urlBase + "/financiador";
  }

  getAll(){
    return this.$http.get(this.url)
  }
}
// FinanciadorService.$inject = ["Url", "$http"];
// export default FinanciadorService;
export default ["Url", "$http", FinanciadorService];
