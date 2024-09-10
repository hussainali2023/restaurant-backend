import { Router } from "express";
import { getMenus } from "../controllers/menu.controller.js";

const router = Router();

router.route("/all-menu").get(getMenus);

export default router;
