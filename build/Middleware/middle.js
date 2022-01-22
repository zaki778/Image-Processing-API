"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checker = exports.validator = void 0;
var resizeFunc_1 = require("../utillities/resizeFunc");
var file_exists_1 = __importDefault(require("file-exists"));
var validator = function (req, res, next) {
    var filename = req.query.filename;
    (0, file_exists_1.default)("images/".concat(filename, ".jpg"), function (err, exists) {
        try {
            if (exists) {
                next();
            }
            else {
                res.render('error', { message: 'error!' });
            }
        }
        catch (_a) {
            console.log(err);
            res.render('error');
        }
    });
};
exports.validator = validator;
var checker = function (req, res, next) {
    var w = Number(req.query.width);
    var h = Number(req.query.height);
    var fileName = req.query.filename;
    var completedFileName = fileName + '_' + w + '_' + h;
    (0, file_exists_1.default)("resizedImages/".concat(completedFileName, ".jpg"), function (err, exists) {
        try {
            if (exists) {
                console.log('checker try if');
                console.log('---------------');
                next();
            }
            else {
                console.log('checker try else');
                console.log('---------------');
                (0, resizeFunc_1.resize)(fileName, w, h).then(function () {
                    next();
                });
            }
        }
        catch (_a) {
            console.log(err);
            res.render('error');
        }
    });
};
exports.checker = checker;
