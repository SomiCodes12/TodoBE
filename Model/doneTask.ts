import mongoose, { model } from "mongoose"
import { iDone } from "../Utils/Interfaces";

interface idoneData extends iDone , mongoose.Document{}

const doneSchema = new mongoose.Schema<idoneData>({
   title : {
    type : String,
    required:true,
   },
} , {timestamps : true})

export const doneModel = model <idoneData>("dones" , doneSchema);