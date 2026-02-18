//se crea ruta, sirve para agrupar rutas
const router = require("express").Router();
//se importa el controlador que maneja la logica cuando se accede a esta ruta
const homeController = require("../controllers/home.controller");
//cuando llegue una req get se ejecuta la funcion index dentro del arch homecontroller
router.get("/", homeController.index);
//se exporta ruta para que app pueda usar
module.exports = router;
