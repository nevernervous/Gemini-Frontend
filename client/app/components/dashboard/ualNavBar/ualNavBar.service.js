let ualNavBarService = function () {
  "ngInject";
  let _isOpen = false;

  let toggle = () => _isOpen = !_isOpen;
  let open = () => _isOpen = true;
  let close = () => _isOpen = false;

  let isOpen = () => _isOpen;

  return {
    isOpen,
    toggle, open, close
  };
};

export default ualNavBarService;
