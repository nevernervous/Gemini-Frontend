import template from './ualTooltipService.html';
import './ualTooltipService.scss';
let ualTooltipService = function () {
  "ngInject";


  let show = (options) => {
    let tooltip=$("#tooltip");
    let container = $("#" +options.container);
    let offset = container.offset();

    //set Text
    $("#tooltip > .container").html(options.text);
    //remove classes
    tooltip.removeClass('-tooltip-right');
    tooltip.removeClass('-tooltip-left');
    tooltip.removeClass('-tooltip-top');
    tooltip.removeClass('-tooltip-bottom');

    //get of position

    switch (options.position) {
      case "left":
        offset.left = offset.left + (parseInt(options.adjust.left) ? parseInt(options.adjust.left) : 0) - tooltip.outerWidth(true);
        tooltip.addClass('-tooltip-left');
        offset.top -= ((tooltip.height() / 2) - ((container.height() / 2)));
        offset.top += parseInt(options.adjust.top) ? parseInt(options.adjust.top) : 0;
        break;
      case "right":
        offset.left =  offset.left + container.outerWidth(true) + (parseInt(options.adjust.right) ? parseInt(options.adjust.right) : 0);
        tooltip.addClass('-tooltip-right');
        offset.top -= ((tooltip.height() / 2) - ((container.height() / 2)));
        offset.top += parseInt(options.adjust.top) ? parseInt(options.adjust.top) : 0;
        break;
      case "top":
        offset.top =  offset.top - $("#tooltip").outerHeight(true);
        tooltip.addClass('-tooltip-top');
        offset.left -= ((tooltip.outerWidth() / 2) - ((container.width() / 2)));
        offset.left += parseInt(options.adjust.top) ? parseInt(options.adjust.top) : 0;
        break;
      case "bottom":
        offset.top =  offset.top + container.outerHeight(true);
        tooltip.addClass('-tooltip-bottom');
        offset.left -= ((tooltip.outerWidth() / 2) - ((container.width() / 2)));
        offset.left += parseInt(options.adjust.top) ? parseInt(options.adjust.top) : 0;
        break;
      default:
     }

    tooltip.css(offset);
    //DEBUG:
    tooltip.css(
      {'display':'block'});

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
    //console.log($("#tooltip"));
  }
  initialize();
  return { show, hide };
};
export default ualTooltipService;
