//importar express
const express = require("express");

const path = require("path");

//se inicializa el servidor
const app = express();

//middleware configurado antes de las rutas
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

// configurar EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// importar rutas
app.use("/", require("./routes/home.routes"));
app.use("/topics", require("./routes/topics.routes"));
app.use("/links", require("./routes/links.routes"));


//definir el puerto
const PORT = 5555;

//levantar el servidor
app.listen(PORT, () => {
    console.log(`servidor en http://localhost:${PORT}`);
});