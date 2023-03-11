
const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth")


/**
 * Crear un registro
 */
// Estamos en http://localhost:3001/api/auth/login
// Estamos en http://localhost:3001/api/auth/registrar

router.post("/register", validatorRegister, registerCtrl);


router.post("/login", validatorLogin, loginCtrl);



module.exports = router