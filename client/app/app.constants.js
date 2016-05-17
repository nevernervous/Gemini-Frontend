
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://vcld16gdgemap02.global.ual.com:8080/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://localhost:8889/api"
	},
	"version": "0.0.5-v583a5c6"
})

;
