
const ualPopoverService = function ($mdToast) {
  "ngInject";

  // OPEN
  const open = function(triggerId, adjustment, direction){
    var trigger =  $('#'+triggerId); //get trigger element
    var target =  $('.ual-popover[trigger="'+triggerId+'"]'); //get triger's target popover
    target.css( 'position', 'absolute' );
    calcPopoverPosition(trigger, target, adjustment, direction); //calculate the position of the popover
  }
  const calcPopoverPosition = function(trigger, target, adjustment, direction){
    // calculates the position of the popover
    var left, top;
    var targetWidth = target.outerWidth();
    var targetHeight = target.outerHeight();
    target.removeClass('hide');
    var triggerWidth = trigger.outerWidth();
    var triggerHeight = trigger.outerHeight();
    var offset = trigger.offset();

    switch(direction){
      case 'left': {
        // TODO: FIX
        left = offset.left - targetWidth - 10 + 'px';
        top = offset.top + 'px';
        break;
      }

      case 'right':{
        // TODO: FIX
        left = offset.left + triggerWidth + 10 + 'px';
        top = offset.top + 'px';
        break;
      }

      case'top':{
        left = offset.left + (triggerWidth / 2) - (targetWidth / 2) + 'px';
        top = offset.top + adjustment.top - ( (triggerHeight * 2) + targetHeight + 14 ) + 'px';
        break;
      }

      default:{
        // TODO: FIX
        left = offset.left +'px';
        top = offset.top + triggerHeight + 10 + 'px'
      }
    }

    target.css( 'left', left );
    target.css( 'top', top );
  }


  // CLOSE
  const close = function(trigger){
    $('.ual-popover[trigger='+trigger+']').addClass('hide');
  }
  const closeAll = function(){
    $('.ual-popover').addClass('hide');
  }

  return {
    open,
    close,
    closeAll
  };
};

export default ualPopoverService;
