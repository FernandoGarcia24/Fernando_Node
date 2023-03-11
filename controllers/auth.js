
const { matchedData } = require("express-validator");
const { encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { handleHttpError } = require("../utils/handleError");
const { usersModel } = require("../models");
const { compare } = require("bcryptjs");

/**
 * Este es el encargado de registrar un usuario
 * @param {*} req 
 * @param {*} res 
 */

const registerCtrl = async (req, res) => {

    try {
        req = matchedData(req);      // Toma los datos rnviados en la solisitud y los almacena en un objeto
        const password = await encrypt(req.password);
        const body = { ...req, password };   // Sobre escribe lo se encientra con atributo passworld   
        const { usersModel } = require("../models");
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data });

    } catch (e) {
        handleHttpError(res, "ERROR_REGISTER_USER")

    }

};


/**
 * Este controlador es el encargado de logear una persona
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {

    try {
        req = matchedData(req);
        const user = await usersModel.findOne({email:req.email})
        .select('password name role email');
        if(!user) {
            handleHttpError(res, "USER_NOT_EXISTS", 404);
            return
        }

        const handlePassword = user.get ('password');
        const check = await compare(req.password, handlePassword);         // Compara la cotraseña encriptada y la que esta en la base de datos (handlePassword)

        if(!check) {
            handleHttpError(res, "PASSWORD_INVALID",401)
        }

        const data = {
            token: tokenSign(user),
            user
        }

        res.send({data});


    } catch (e) {
        handleHttpError(res, "ERROR_LOGIN_USER")

    }

}

module.exports = { registerCtrl, loginCtrl }