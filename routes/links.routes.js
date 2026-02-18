//se crea ruta, sirve para agrupar rutas
const router = require("express").Router();
//se importa el controlador que maneja la logica cuando se accede a esta ruta
const linksController = require("../controllers/links.controller");

//rutas para crear, actualizar, eliminar y votar links
router.post("/", linksController.create);
router.put("/:id", linksController.update);
router.delete("/:id", linksController.delete);
router.post("/:id/vote", linksController.vote);

module.exports = router;
