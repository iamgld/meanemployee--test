const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middlerwares imports
const cors = require("cors");
const { mongoose } = require("./database");

// Routes imports
const employees = require("./routes/employees.routes");

// Setting
// app.set('port', port)
// ? Configuramos el puerto que nos ofresca el servicio en la nube
app.set("port", process.env.PORT || port);

// Middlerwares
app.use(express.json());

// Routes
// ? Configuramos las rutas del proyecto a las que daremos respuesta
app.use("/api/employees", employees);

// Static files
app.use(express.static(path.join(__dirname, "../frontend/dist/")));
// app.get('/', (req, res) => res.send('Hello World!'))

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
