import Router from "express";
import { createAccount, viewAccount } from "../Controller/accountController";

const router = Router();

router.route("/create-account").post(createAccount);
router.route("/view-accounts").get(viewAccount);

export default router;
