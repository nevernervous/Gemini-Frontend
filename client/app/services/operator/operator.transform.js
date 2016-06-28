import angular from 'angular';

let operatorTransform = function() {
    "ngInject";

    let _transformation = {
        grouped: (response) => {
          let operatorList={};
          _.each(response, (item) => {
           operatorList[item.dataType.description]=item.filterOperators;
          });
          return operatorList;

        }
    }

    let get = (key) => {
        return _transformation[key] ? _transformation[key] : _transformation.grouped;
    }

    return {
        get
    };
};

export default operatorTransform;
