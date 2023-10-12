"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../Controller/taskController");
const router = (0, express_1.default)();
router.route("/create-task").post(taskController_1.createTask);
router.route("/view-tasks").get(taskController_1.viewTask);
router.route("/:taskID/view-one-task").get(taskController_1.viewOneTask);
router.route("/:taskID/delete-task").delete(taskController_1.deleteTask);
exports.default = router;
