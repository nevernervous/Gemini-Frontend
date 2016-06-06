
module.exports = angular.module("app.helper.errorsHandler", [])

.constant("Messages", {
  500: { type: '-error', text: ''},
  400: { type: '-error', text: ''}
});
