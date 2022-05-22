import express from "express";
import CourseControllers from "../controllers/courseController";

const router = express.Router();

router.route("/create").post(CourseControllers.create);
router.route("/edit/name").post(CourseControllers.editName);
router.route("/delete").post(CourseControllers.delete);

export default router;