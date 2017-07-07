# Aviso
este repositorio es un fork de 
*https://github.com/psotoulloa/js-dev-env
revise primero antes de comenza con este repositorio

##Como instalar

npm -i https://github.com/seront/medipass-base.git --save

luego importar las dependencias en el archivo principar de la aplicación

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/medipass-base/lib/medipass-base.css';

import {AccessModule} from 'medipass-base'; //modulo de ejemplo
```
y en el modulo principal de la aplicación
```javascript
let app = angular.module('app',[AccessModule])
```

## Como crear componentes y modulos base

