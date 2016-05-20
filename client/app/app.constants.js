
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://vcld16gdgemap02.global.ual.com:8080/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	},
	"version": "0.0.5-v50d1c05"
})

;
