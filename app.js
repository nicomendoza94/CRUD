//importar express
const express = require("express");

//se inicializa el servidor
const app = express();

//middleware configurado antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//definir el puerto
const PORT = 5555;

//ruta de prueba
app.get("/", (req, res) => {
    res.send("servidor funcionando");
});

//levantar el servidor
app.listen(PORT, () => {
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});