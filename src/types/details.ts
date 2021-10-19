import { Date, Document } from "mongoose";

export interface IDetails extends Document {
    date: Date
    jobcard: number
    name: string
    item: string
    quantity: number
    printing: number
    corrogation_b2b: number
    b2b_date: Date
    corrogation_b2b_done: number
    b2b_date_done: Date
    punching: number
    pasting: number
    sent: number
    stock: number
}