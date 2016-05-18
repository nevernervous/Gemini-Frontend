import angular from 'angular';
import mocks from 'angular-mocks';
import $ from 'jquery';

var context = require.context('./client', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
