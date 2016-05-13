import angular from 'angular';
import ualAccordionDirective from './ualAccordion.directive';

let ualAccordionModule = angular.module('ualAccordion', [])

.directive('ualAccordion', () => new ualAccordionDirective());

export default ualAccordionModule;


