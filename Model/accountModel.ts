import mongoose, { model } from "mongoose"
import { iAccount } from "../Utils/Interfaces";

interface iAccountData extends iAccount , mongoose.Document{}

const accountSchema = new mongoose.Schema<iAccountData>({
   userName : {
    type : String,
    required:true,
   },
   tasks : [{
    type : Array<string>
   }],
} , {timestamps : true})

export const accountModel = model <iAccountData>("accounts" , accountSchema);