import { Request, Response } from "express";
import { taskModel } from "../Model/TaskModel";


export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, name } = req.body;

    const task = await taskModel.create({
      title,
      name,
    });

    return res.status(200).json({
      message: "Created Task Successfully",
      data: task,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Creating Task",
      data: error,
    });
  }
};

export const viewTask = async (req: Request, res: Response) => {
  try {
    const user = await taskModel.find();

    return res.status(200).json({
      message: "Viewed Task Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Creating Task",
      data: error,
    });
  }
};

export const viewOneTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;
    const user = await taskModel.findById(taskID);

    return res.status(400).json({
      message: "Viewed One Task Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error Creating Task",
      data: error,
    });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskID } = req.params;
    const user = await taskModel.findByIdAndDelete(taskID);

    return res.status(200).json({
      message: "Deleted Task Successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error Deleting Task",
      data: error.message,
    });
  }
};
