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
router
  .route("/:id")
  .put(authenticate, authorizeAdmin, updateGenre)
  .delete(authenticate, authorizeAdmin, deleteGenre)
  .get(getGenre);
router.route("/genres").get(getAllGenres);
export default router;
