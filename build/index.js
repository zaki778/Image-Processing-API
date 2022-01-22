"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resizeRoute_1 = __importDefault(require("./routes/resizeRoute"));
var app = (0, express_1.default)();
var port = 4800;
app.listen(port, function () {
    console.log("Server is listening on port : ".concat(port));
});
app.use(express_1.default.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express_1.default.static('public'));
app.use('/resizeImage', resizeRoute_1.default);
exports.default = app;
