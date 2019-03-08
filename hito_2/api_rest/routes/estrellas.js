var request = require('request')

module.exports = function (app) {
    app.get('/estrellas', (req, res) => {
        var url = "https://api.github.com/repos/0smak/0smak.github.io"
        var headers = "0smak"
        return request({
            url: url,
            headers: { 'User-Agent': 'osmak' },
            json: true
        }, function (error, response, body) {
            if (response.statusCode === 200) {
                res.json({
                    "estrellas": body.stargazers_count
                })
            }
        })
    })
}