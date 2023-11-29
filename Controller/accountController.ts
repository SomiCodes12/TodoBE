import { Request, Response } from "express"
import { accountModel } from "../Model/accountModel";

export const createAccount = async (req : Request , res : Response) => {
    try {
        const { userName } = req.body;

        const account = await accountModel.create({userName});

        return res.status(200).json({
            message : "Created Account",
            data : account
        })
    } catch (error : any) {
        return res.status(400).json({
            message : "Error Creating Account",
            data : error.message
        })
    }
}

export const viewAccount = async (req : Request , res : Response) => {
    try {

        const account = await accountModel.find()
        return res.status(200).json({
            message : "Created Account",
            data : account
        })
    } catch (error : any) {
        return res.status(400).json({
            message : "Error Creating Account",
            data : error.message
        })
    }
}