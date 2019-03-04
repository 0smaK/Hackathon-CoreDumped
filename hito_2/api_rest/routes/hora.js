module.exports = function (app){
    app.get('/hora', (req, res) => {
        var fecha = new Date()
        res.json({
            "hora": fecha.getHours()+":"+fecha.getMinutes()
        })
    })
}