import Router from "express";
import {
  createTask,
  deleteTask,
  viewOneTask,
  viewTask,
} from "../Controller/taskController";

const router = Router();

router.route("/create-task").post(createTask);
router.route("/view-tasks").get(viewTask);
router.route("/:taskID/view-one-task").get(viewOneTask);
router.route("/:taskID/delete-task").delete(deleteTask);

export default router;
