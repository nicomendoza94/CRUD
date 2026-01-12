//importar express
const express = require("express");

//se inicializa el servidor
const app = express();

//middleware configurado antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// importar rutas
const topicsRoutes = require("./routes/topics.routes");

// usar rutas
app.use("/", topicsRoutes);

//definir el puerto
const PORT = 5555;

//levantar el servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});