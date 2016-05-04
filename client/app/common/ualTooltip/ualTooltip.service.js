import template from './ualTooltipService.html';
import './ualTooltipService.scss';
let ualTooltipService = function () {
  "ngInject";

  let show = (options) => {
    let tooltip=$("#tooltip");
    let container = $("#" +options.container);
    let offset = container.offset();
    let hasEllipsis=$("#" +options.container).has("span").length;
    let adjust = {
      left: hasEllipsis ? 2 : -4,
      right: hasEllipsis ? (window.isIE ? 3 : 4) : (window.isIE ? 10 : 15),
      top: window.isIE ? 2 : 5,
      bottom:  window.isIE ? 2 : 5
    }

    //set Text
    $("#tooltip > .container").html(options.text);
    //remove classes
    tooltip.removeClass('-tooltip-right');
    tooltip.removeClass('-tooltip-left');
    tooltip.removeClass('-tooltip-top');
    tooltip.removeClass('-tooltip-bottom');
    tooltip.removeClass('-error');

    switch(options.position) {
      case "left":
        options.position = ( offset.left - tooltip.outerWidth(true) ) < 0 ? "right" : "left";
        break;
      case "right":
        options.position = ( offset.left + container.outerWidth(true) + tooltip.outerWidth(true) ) > window.innerWidth ? "left" : "right";
        break;
      case "top":
        options.position = ( offset.top - tooltip.outerHeight(true) ) > 0 ? "top" : "bottom";
        break;
      case "bottom":
        options.position = ( offset.top + container.outerHeight(true) + tooltip.outerHeight(true) ) > window.innerHeight ? "top" : "bottom";
        break;
    }

    //get of position
    switch (options.position) {
      case "left":
        offset.left = offset.left + adjust.left - tooltip.outerWidth(true);
        tooltip.addClass('-tooltip-left');
        offset.top -= ( (tooltip.height() / 2) - (container.height() / 2) );
        offset.top += adjust.top;
        break;
      case "right":
        offset.left =  offset.left + adjust.right + container.outerWidth(true) ;
        tooltip.addClass('-tooltip-right');
        offset.top -= ( (tooltip.height() / 2) - (container.height() / 2) );
        offset.top += adjust.top;
        break;
      case "top":
        offset.top =  offset.top - tooltip.outerHeight(true);
        tooltip.addClass('-tooltip-top');
        offset.left -= ( (tooltip.outerWidth() / 2) - (container.width() / 2) );
        offset.left += adjust.left
        break;
      case "bottom":
        offset.top =  offset.top + adjust.bottom + container.outerHeight(true);
        tooltip.addClass('-tooltip-bottom');
        offset.left -= ( (tooltip.outerWidth() / 2) - (container.width() / 2) );
        offset.left += adjust.left;
        break;
     }

    tooltip.css(offset);

    if(options.type){
      tooltip.addClass(options.type);
    }

    //SHOW:
    tooltip.css('display','block');

  }

  let hide = () => {
    let tooltip=$("#tooltip");
    let offset={
      left:0,
      top:0,
    }
    tooltip.css(offset);
    tooltip.css("display","none");

  }
  let initialize = () => {
    // TODO / ADD HTML TO BODY
    // template
    var $body = angular.element(document.getElementsByTagName("body"));
    $body.append(template);
  }

  initialize();

  return { show, hide };
};
export default ualTooltipService;
