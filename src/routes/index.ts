import { Router } from "express";
import { getDetails, getByName, addDetails, deleteDetails, patchDetails } from "../controllers/details";

const routes: Router = Router();

routes.get("/all", getDetails);
routes.get("/all/:name", getByName);
routes.post("/add", addDetails);
routes.patch("/update/:id", patchDetails);
routes.delete("/remove/:id", deleteDetails);

export default routes;