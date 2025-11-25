import express from "express";
import { simulacionController } from "../controllers/simulacionController.js";
import { simulacionController, guardarSimulacion, obtenerHistorial } from "../controllers/simulacionController.js";


const router = express.Router();
router.post("/", simulacionController);
router.get("/historial", obtenerHistorial);

export { router };