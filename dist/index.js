"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./Config/db"));
const mainApp_1 = __importDefault(require("./mainApp"));
const swagger_1 = __importDefault(require("./Utils/swagger"));
dotenv_1.default.config();
const port = parseInt(process.env.PORT);
const app = (0, express_1.default)();
(0, mainApp_1.default)(app);
const server = app.listen(process.env.PORT || port, () => {
    (0, db_1.default)();
    console.log("Server Live");
    (0, swagger_1.default)(app, port);
});
process.on("uncaughtException", (error) => {
    console.log(error);
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log(reason);
    server.close(() => {
        process.exit(1);
    });
});
