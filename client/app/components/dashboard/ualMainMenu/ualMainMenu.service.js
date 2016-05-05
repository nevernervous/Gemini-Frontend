let ualMainMenuService = function () {
  "ngInject";
  let _isOpen = false;

  let toggle = () => _isOpen = !_isOpen;

  let isOpen = () => _isOpen;

  return {
    isOpen,
    toggle
  };
};

export default ualMainMenuService;
