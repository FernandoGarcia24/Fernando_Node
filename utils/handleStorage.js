
const multer = require("multer")                                  //configuracion multer para subir archivos

const storage = multer.diskStorage({                            //Creamos un objeto storage con dos propiedades: destination y filename 
    destination: function (req, file, cb) {                    //especifica el directorio donde se guardarán los archivos 
        const pathStorage = `${__dirname}/../storage`;        // el directorio donde se guardarán los archivos subidos por el usuario
        cb(null, pathStorage);                               //Llamamos a la función callback pasando como parámetro null y pathStorage
    },
    // todo mi -cv.pdf mi_foto.png mi video.mp4 
        filename: function (req, file, cb) {                    //La segunda propiedad genera un nombre único para cada archivo
        const ext = file.originalname.split(".").pop();        //Obtenemos la extensión del archivo subido por el usuario ["NAME","PNG"]
        const filename = `file-${Date.now()}.${ext}`;         //Generamos un nombre único para el archivo con Date.now()
        cb(null, filename)
    },
});

const uploadMiaddleware = multer({storage})


module.exports = uploadMiaddleware;