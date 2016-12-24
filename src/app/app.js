import angular from 'angular';

import './app.scss';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl as app'
  }
};

class AppCtrl {
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
