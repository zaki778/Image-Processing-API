"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var middle_1 = require("../Middleware/middle");
var path_1 = __importDefault(require("path"));
var router = express_1.default.Router();
var middle = [middle_1.validator, middle_1.checker];
router.use(middle);
router.get('/', middle, function (req, res) {
    var w = Number(req.query.width);
    var h = Number(req.query.height);
    var fileName = req.query.filename;
    var newFileName = fileName + '_' + w + '_' + h;
    res.sendFile(path_1.default.resolve("resizedImages/".concat(newFileName, ".jpg")));
});
exports.default = router;
