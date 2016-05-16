import angular from 'angular';
import mocks from 'angular-mocks';
import $ from 'jquery';

var context = require.context('./client', true, /.+\.spec_\.js?$/);
context.keys().forEach(context);
module.exports = context;
