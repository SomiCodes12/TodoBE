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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.viewOneTask = exports.viewTask = exports.createTask = void 0;
const TaskModel_1 = require("../Model/TaskModel");
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, name } = req.body;
        const task = yield TaskModel_1.taskModel.create({
            title,
            name,
        });
        return res.status(200).json({
            message: "Created Task Successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Creating Task",
            data: error,
        });
    }
});
exports.createTask = createTask;
const viewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield TaskModel_1.taskModel.find();
        return res.status(200).json({
            message: "Viewed Task Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Creating Task",
            data: error,
        });
    }
});
exports.viewTask = viewTask;
const viewOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const user = yield TaskModel_1.taskModel.findById(taskID);
        return res.status(400).json({
            message: "Viewed One Task Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Creating Task",
            data: error,
        });
    }
});
exports.viewOneTask = viewOneTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { taskID } = req.params;
        const user = yield TaskModel_1.taskModel.findByIdAndDelete(taskID);
        return res.status(200).json({
            message: "Deleted Task Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Deleting Task",
            data: error.message,
        });
    }
});
exports.deleteTask = deleteTask;
