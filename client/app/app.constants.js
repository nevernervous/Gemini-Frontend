
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://localhost:8889/api",
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	}
})

;
