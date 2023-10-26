import mongoose, { model } from "mongoose"
import { iTask } from "../Utils/Interfaces";

interface iTaskData extends iTask , mongoose.Document{}

const taskSchema = new mongoose.Schema<iTaskData>({
   title : {
    type : String,
    required:true,
   },
   name : {
    type : String,
   },
} , {timestamps : true})

export const taskModel = model <iTaskData>("tasks" , taskSchema);