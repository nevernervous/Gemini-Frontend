<<<<<<< HEAD
import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesCancelModal from './ualVariablesCancelModal/ualVariablesCancelModal';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesCancelModal.name,
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name,
  ualVariablesGroup.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
=======
import angular from 'angular';
import ualVariablesFactory from './ualVariables.factory';
import ualVariablesCancelModal from './ualVariablesCancelModal/ualVariablesCancelModal';
import ualVariablesDeteleAllModal from './ualVariablesDeteleAllModal/ualVariablesDeteleAllModal';
import ualVariableSelectedItem from './ualVariableSelectedItem/ualVariableSelectedItem';
import ualTabs from './ualTabs/ualTabs';
import ualTab from './ualTab/ualTab';
import ualVariablesGroup from './ualVariablesGroup/ualVariablesGroup';

let ualVariablesModule = angular.module('ualVariables', [
  ualVariablesCancelModal.name,
  ualVariablesDeteleAllModal.name,
  ualVariableSelectedItem.name,
  ualTabs.name,
  ualTab.name,
  ualVariablesGroup.name
])

.factory('ualVariables', ualVariablesFactory);

export default ualVariablesModule;
>>>>>>> 83eb1d47c72147042cd3e6b6b3fe22ba1d67a335
