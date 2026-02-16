"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idValidation = void 0;
const express_validator_1 = require("express-validator");
exports.idValidation = (0, express_validator_1.param)('id')
    .exists()
    .withMessage('ID is required') // Проверка на наличие
    .isString()
    .withMessage('ID must be a string') // Проверка, что это строка
    .isLength({ min: 1 })
    .withMessage('ID must not be empty') // Проверка, что строка не пустая
    .isNumeric()
    .withMessage('ID must be a numeric string');
