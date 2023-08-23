import express from "express";
import { ConsultDistanceMiddleware } from "../middleware/consult-distance-middleware.js";
import { ConsultaDistanceController } from "../controller/consult-distance-controller.js";
const router = express.Router();

router.get('/distance/:cep', new ConsultaDistanceController().handle);

export default router;