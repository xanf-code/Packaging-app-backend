import { Request, Response } from "express";
import Details from "../../models/details";
import User from "../../models/users";
import { IDetails } from "../../types/details";
import { handleQuerySort } from "../../helpers/sorting";
import { Query } from "../../types/query";
import { IUsers } from "../../types/users";

const getDetails = async (req: Request, res: Response) => {
    try {
        const sortQuery = req.query.sort as Query;
        const sort = handleQuerySort(sortQuery);
        const defSort = { 'date': -1 };
        const details: IDetails[] = await Details.find({}, "-__v").sort(sortQuery ? sort : defSort);
        res.status(200).json({ details });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

const getByName = async (req: Request, res: Response) => {
    try {
        const id = req.params;
        const sortQuery = req.query.sort as Query;
        const sort = handleQuerySort(sortQuery);
        const defSort = { 'date': -1 };
        const nameDetails: IDetails[] = await Details.find({ "name": id.name }, "-__v").sort(sortQuery ? sort : defSort);
        res.status(200).json({
            status: "success",
            data: nameDetails
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

const addDetails = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const newDate: Date = new Date(Date.now());
        const details: IDetails = new Details({
            date: newDate,
            jobcard: body.jobcard,
            name: body.name,
            item: body.item,
            quantity: body.quantity,
            printing: body.printing,
            corrogation_b2b: body.corrogation_b2b,
            corrogation_b2b_done: body.corrogation_b2b_done,
            punching: body.punching,
            pasting: body.pasting,
            sent: body.sent,
            stock: body.stock,
        });

        const newDetails: IDetails = await details.save();

        res.status(200).json({
            status: "success",
            data: newDetails,
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

const updateDetails = async (req: Request, res: Response) => {
    try {
        const options = { returnNewDocument: true };
        const id = req.params.id;
        const updates: IDetails = req.body;
        const details: IDetails | null = await Details.findByIdAndUpdate(id, updates, options);
        res.status(200).json({
            status: "success",
            data: details,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

const deleteDetails = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deleteDetail: IDetails | null = await Details.findByIdAndDelete(id);
        res.status(200).json({
            status: "success",
            data: deleteDetail
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

const updateUsers = async (req: Request, res: Response) => {
    try {
        const options = { returnNewDocument: true };
        const id = req.params.id;
        const updates = req.body;
        const details = await User.findByIdAndUpdate(id, updates, options);
        res.status(200).json({
            status: "success",
            data: details,
        });
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

const getUserById = async (req: Request, res: Response) => {
    try {
        var id = req.params.id;
        const details = await User.findById(id, '-_id');
        res.send(details)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
}

export { getDetails, getByName, addDetails, deleteDetails, updateDetails, updateUsers, getUserById };