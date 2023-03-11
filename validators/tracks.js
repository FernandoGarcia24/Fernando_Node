
const { check } = require("express-validator");
const validationResults = require("../utils/handleValidator");

const validatorCreateItem = [

    check("name").exists().notEmpty().isLength(),

    check("album").exists().notEmpty().isLength(),

    check("cover").exists().notEmpty().isLength(),

    check("artist").exists().notEmpty().isLength(),
    check("artist.name").exists().notEmpty().isLength(),
    check("artist.nickname").exists().notEmpty().isLength(),
    check("artist.nationality").exists().notEmpty().isLength(),

    check("duration").exists().notEmpty().isLength(),
    check("duration.start").exists().notEmpty().isLength(),
    check("duration.end").exists().notEmpty().isLength(),

    check("mediaId").exists().notEmpty().isLength().isMongoId(),


    (req, res, next) => {
        return validationResults(req, res, next);

    }

];


const validatorGetItem = [

    check("id")
    .exists()
    .notEmpty()
    .isLength()
    .isMongoId(),

    (req, res, next) => {
        return validationResults(req, res, next);

    }

];

module.exports = { validatorCreateItem, validatorGetItem};
 