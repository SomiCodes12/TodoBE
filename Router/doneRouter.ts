import Router from "express"

import { createDoneTask, deleteDoneTask, viewDoneTask, viewOneDoneTask } from "../Controller/doneController";

const router = Router();

router.route("/create-done-task").post(createDoneTask);
router.route("/view-done-task").get(viewDoneTask);
router.route("/:donetaskid/view-one-done-task").get(viewOneDoneTask);
router.route("/:doneTaskID/delete-done-task").delete(deleteDoneTask);

export default router;