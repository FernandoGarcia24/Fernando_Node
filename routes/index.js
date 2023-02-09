
const express = require("express");
const fs = require("fs");
const router = express.Router();


const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => {
    // Todo  tracks.js ['tracks, js']
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) //Puede llegar index o tracks

    if (name !== 'index') {
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) //esto lee http://localhost:3000/tracks, store o user
    }

})

module.exports = router;