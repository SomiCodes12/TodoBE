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
exports.deleteDoneTask = exports.viewOneDoneTask = exports.viewDoneTask = exports.createDoneTask = void 0;
const doneTask_1 = require("../Model/doneTask");
const createDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const task = yield doneTask_1.doneModel.create({ title });
        return res.status(200).json({
            message: "Created DoneTask Successfully",
            data: task,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Creating DoneTask",
            data: error.message,
        });
    }
});
exports.createDoneTask = createDoneTask;
const viewDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield doneTask_1.doneModel.find();
        return res.status(200).json({
            message: "Viewed DoneTask Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Viewing One Done Task",
            data: error,
        });
    }
});
exports.viewDoneTask = viewDoneTask;
const viewOneDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { donetaskid } = req.params;
        const user = yield doneTask_1.doneModel.findById(donetaskid);
        return res.status(200).json({
            message: "Viewed One DoneTask Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Viewing One Done Task",
            data: error,
        });
    }
});
exports.viewOneDoneTask = viewOneDoneTask;
const deleteDoneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { doneTaskID } = req.params;
        const user = yield doneTask_1.doneModel.findByIdAndDelete(doneTaskID);
        return res.status(200).json({
            message: "Deleted DoneTask Successfully",
            data: user,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Error Deleting Done Task",
            data: error,
        });
    }
});
exports.deleteDoneTask = deleteDoneTask;
