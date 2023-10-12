"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const taskRouter_1 = __importDefault(require("./Router/taskRouter"));
const doneRouter_1 = __importDefault(require("./Router/doneRouter"));
const appConfig = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app
        .use((0, cors_1.default)())
        .use(express_1.default.json())
        .use("/api/v1", taskRouter_1.default)
        .use("/api/v1", doneRouter_1.default)
        .get("/", (req, res) => {
        try {
            return res.status(200).json({
                message: "Good to Go!!!"
            });
        }
        catch (error) {
            return res.status(404).json({
                message: "Root Error"
            });
        }
    });
});
exports.default = appConfig;
