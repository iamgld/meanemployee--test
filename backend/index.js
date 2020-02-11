const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const portAngular = 'http://localhost:4200'

// Middlerwares imports
const morgan = require('morgan')
const cors = require('cors')
const { mongoose } = require('./database')

// Routes imports
const employees = require('./routes/employees.routes')
const payment = require('./routes/payment.routes')

// Setting
// app.set('port', port)
// ? Configuramos el puerto que nos ofresca el servicio en la nube
app.set('port', process.env.PORT || port)

// Middlerwares
// ? Mensajes en consola
app.use(morgan('dev'))
// ? Configuramos express para que entienda respuestas en formato json
app.use(cors({origin: portAngular}))
app.use(express.json())

// Routes
// ? Configuramos las rutas del proyecto a las que daremos respuesta
app.use('/api/employees', employees)
app.use('/api/payment', payment)

// Static files
// app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')))
// app.get('/', (req, res) => res.send('Hello World!'))

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port ' + app.get('port'))
})