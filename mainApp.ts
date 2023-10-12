import express, { Application  , Request , Response} from "express"
import mongoose from "mongoose"
import cors from "cors"
import task from "./Router/taskRouter"
import done from "./Router/doneRouter"



const appConfig = async (app : Application)=>{
    app
    .use(cors())
    .use(express.json())

    .use("/api/v1" , task)
    .use("/api/v1" , done)

    .get("/" , (req : Request , res : Response)=>{
        try {
            return res.status(200).json({
                message : "Good to Go!!!"
            })
        } catch (error) {
            return res.status(404).json({
                message : "Root Error"
            })
        }
    })
}

export default appConfig