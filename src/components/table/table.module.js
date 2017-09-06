import angular from 'angular';
import material from 'angular-material'
import materialTable from 'angular-material-data-table';
import {TableComponent} from './table.component';


export default angular.module('medipass.table', [material, materialTable])
  .component('customTable', TableComponent)
  .name;
