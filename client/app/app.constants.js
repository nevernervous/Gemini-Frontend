
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://192.168.0.105:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	}
})

;
