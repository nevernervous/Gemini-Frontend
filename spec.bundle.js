import angular from 'angular';
import mocks from 'angular-mocks';

var context = require.context('./client', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
