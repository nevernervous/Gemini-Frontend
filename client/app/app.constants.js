
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://10.230.7.8:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	}
});
