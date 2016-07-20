class ualPopoverController {
  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;
  }

  bodyListenerLogic(e) {
      var clickedElement = e.target;
      var insidePopover = false;
      do {
          if(clickedElement != document && (clickedElement.classList && (clickedElement.classList.contains('ual-popover') || clickedElement.classList.contains('ual-popover-trigger')))) {
              insidePopover = true;
          break;
          }
      } while ((clickedElement = clickedElement.parentNode));
      if(!insidePopover) {
          this.hideAllPopovers();
          document.body.removeEventListener('click', bodyListenerLogic);
          this.$scope.onClose();
          this.$scope.$apply();
      }
  }

  hideAllPopovers(){
    var allPopovers = document.querySelectorAll('.ual-popover');
    for(var i =0; i<allPopovers.length; i++){
        var popover = allPopovers[i];
        if(!popover.classList.contains('hide'))
            popover.classList.add('hide')
    }
  }

  registerBodyListener(){
    document.body.addEventListener('click', this.bodyListenerLogic);
  }

  unregisterBodyListener(){
    document.body.removeEventListener('click', this.bodyListenerLogic)
  }

}

export default ualPopoverController;
