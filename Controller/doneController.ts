import { Request, Response } from "express";
import { taskModel } from "../Model/TaskModel";
import { doneModel } from "../Model/doneTask";

export const createDoneTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    const task = await doneModel.create({title});

    return res.status(200).json({
      message: "Created DoneTask Successfully",
      data: task,
    });
  } catch (error : any ) {
    return res.status(400).json({
      message: "Error Creating DoneTask",
      data: error.message,
    });
  }
};

export const viewDoneTask = async (req: Request, res: Response) => {
  try {
    const user = await doneModel.find();

    return res.status(200).json({
      message: "Viewed DoneTask Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Viewing One Done Task",
      data: error,
    });
  }
};

export const viewOneDoneTask = async (req: Request, res: Response) => {
  try {
    const { donetaskid } = req.params;
    const user = await doneModel.findById(donetaskid);

    return res.status(200).json({
      message: "Viewed One DoneTask Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Viewing One Done Task",
      data: error,
    });
  }
};

export const deleteDoneTask = async (req: Request, res: Response) => {
  try {
    const { doneTaskID } = req.params;
    const user = await doneModel.findByIdAndDelete(doneTaskID);

    return res.status(200).json({
      message: "Deleted DoneTask Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Deleting Done Task",
      data: error,
    });
  }
};
