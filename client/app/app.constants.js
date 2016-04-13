
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://vcld16gdgemap01.global.ual.com:8080/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	}
})

;
