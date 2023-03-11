

const bcryptjs = require("bcryptjs");

/** 
 * Contraseña sin incriptar: holamundo12
 * @param {*} passwordPlain
*/
const encrypt = async  (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
};

/**
 * Pasar contraeña sin incriptar y pasar contraseña incriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
};

module.exports = { encrypt, compare};