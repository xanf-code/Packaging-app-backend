import { IUsers } from "../types/users";
import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
    id: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    image: {
        type: String,
    },

    admin: {
        type: Boolean,
        default: false,
    },
});

export default model<IUsers>("User", userSchema);
