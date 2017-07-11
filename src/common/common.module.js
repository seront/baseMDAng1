import angular from 'angular';
import material from 'angular-material'

import {default as HeaderModule} from './header/header.module';

export default angular.module('medipass.common', [material,
HeaderModule
])
.name;
