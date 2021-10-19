import { IDetails } from '../types/details';
import { model, Schema } from "mongoose";

const menuSchema: Schema = new Schema({
    date: {
        type: Date
    },
    jobcard: {
        type: Number,
    },
    name: {
        type: String,
    },
    item: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    printing: {
        type: Number,
    },
    corrogation_b2b: {
        type: Number,
    },
    b2b_date: {
        type: Date,
        default: null,
    },
    corrogation_b2b_done: {
        type: Number,
    },
    b2b_date_done: {
        type: Date,
        default: null,
    },
    punching: {
        type: Number,
    },
    pasting: {
        type: Number,
    },
    sent: {
        type: Number,
    },
    stock: {
        type: Number,
    },
});

export default model<IDetails>('Details', menuSchema);