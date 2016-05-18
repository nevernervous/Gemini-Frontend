
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://localhost:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://localhost:8889/api"
	},
	"version": "0.1.5-v9e4d2d3"
})

;
