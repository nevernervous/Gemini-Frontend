let userService = function (Properties, $http) {
  "ngInject";
  const endpoint = Properties.get('endpoint') + '/users';
  
  let current = () => {
    return $http.get(endpoint);  
  }
    
  return {
    current
  };
};

export default userService;
