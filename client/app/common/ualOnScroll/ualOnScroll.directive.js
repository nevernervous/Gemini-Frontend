class UalOnScrollDirective {
  /*@ngInject*/
    constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes) {
    $(element).on("scroll", () => {
      scope.$apply(attributes.ualScroll);
    });
  }
}

export default UalOnScrollDirective;
