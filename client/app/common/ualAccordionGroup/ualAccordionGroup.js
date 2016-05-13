import angular from 'angular';
import ualAccordionGroupDirective from './ualAccordionGroup.directive';
import ualAccordion from './ualAccordion/ualAccordion';

let ualAccordionGroupModule = angular.module('ualAccordionGroup', [
  ualAccordion.name
])

.directive('ualAccordionGroup', () => new ualAccordionGroupDirective());

export default ualAccordionGroupModule;
