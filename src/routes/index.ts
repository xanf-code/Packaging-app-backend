import { Router } from "express";
import { getDetails, getByName, addDetails, deleteDetails } from "../controllers/details";

const routes: Router = Router();

routes.get("/all", getDetails);
routes.get("/all/:name", getByName);
routes.post("/add", addDetails);
routes.delete("/remove/:id", deleteDetails);

export default routes;