
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://vcld16gdgemap01.global.ual.com:8080/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://localhost:8889/api"
	},
	"version": "0.1.5-v24eb959"
})

;
