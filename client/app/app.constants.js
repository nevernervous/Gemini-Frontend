
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://localhost:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	},
	"version": "0.1.5-v2ec441c"
})

;
