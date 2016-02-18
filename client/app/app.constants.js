
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://10.100.10.4:8080/api",
	"fallback": {
		"endpoint": "http://localhost:8889/api"
	}
})

;
