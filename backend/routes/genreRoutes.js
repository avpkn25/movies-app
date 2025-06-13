import express from "express";

const router = express.Router();

// controllers
import {
  createGenre,
  deleteGenre,
  updateGenre,
  getAllGenres,
  getGenre,
} from "../controllers/genreController.js";

// middlewares
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizeAdmin, createGenre);
router.route("/:id").delete(authenticate, authorizeAdmin, deleteGenre);
router.route("/:id").put(authenticate, authorizeAdmin, updateGenre);
router.route("/genres").get(getAllGenres);
router.route("/:id").get(getGenre);
export default router;
