const express = require('express')
const app = express()

const morgan = require('morgan')

// ajustes / puerto
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev')) // nos muestra todos los mensajes por consola, info de peticiones

//rutas
require('./routes/hora')(app)
require('./routes/estrellas')(app)

app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto 3000")
})

