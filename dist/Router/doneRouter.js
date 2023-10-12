"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const doneController_1 = require("../Controller/doneController");
const router = (0, express_1.default)();
router.route("/create-done-task").post(doneController_1.createDoneTask);
router.route("/view-done-task").get(doneController_1.viewDoneTask);
router.route("/:donetaskid/view-one-done-task").get(doneController_1.viewOneDoneTask);
router.route("/:doneTaskID/delete-done-task").delete(doneController_1.deleteDoneTask);
exports.default = router;
