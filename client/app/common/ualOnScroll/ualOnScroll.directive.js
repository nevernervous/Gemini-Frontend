class UalOnScrollDirective {
  /*@ngInject*/
    constructor() {
    this.restrict = 'A';
  }

  link(scope, element, attributes) {
    $(element).on("scroll", () => {
      scope.$apply(attributes.ualOnScroll);
    });
  }
}

export default UalOnScrollDirective;
