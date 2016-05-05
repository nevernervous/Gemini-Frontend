
module.exports = angular.module("app.constants", [])

.constant("Properties", {
	"endpoint": "http://localhost:8889/api",
	"cache": false,
	"fallback": {
		"endpoint": "http://private-f47c4-ualgemini.apiary-mock.com/api"
	},
	"setting.signalR": {
		"logging": true,
		"endpoint": "http://localhost:8098/signalr",
		"transport": [
			"longPolling"
		],
		"autoConnect": true
	}
})

;
