import { Document, Date } from "mongoose";

export interface IUsers extends Document {
    firstName: string,
    lastName: string,
    email: string,
    image: string,
    admin: boolean,
}