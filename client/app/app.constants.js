
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://localhost:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://localhost:8889/api"
	}
})

;
