import { Router } from "express";
import { getDetails, getByName, addDetails, deleteDetails, updateDetails, updateUsers, getUserById } from "../controllers/details";

const routes: Router = Router();

routes.get("/all", getDetails);
routes.get("/all/:name", getByName);
routes.post("/add", addDetails);
routes.patch("/update/:id", updateDetails);
routes.delete("/remove/:id", deleteDetails);

routes.get("/user/:id", getUserById);
routes.patch("/user/update/:id", updateUsers);

export default routes;