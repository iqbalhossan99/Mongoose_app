import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUsersFromDb, getUserByIdFromDB, getUsersFromDB } from "./user.services";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const user = await createUserToDB(data);

    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUsersFromDB();
    res.status(200).json({
        status: "success",
        data: users
    })
}

export const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params
    const user = await getUserByIdFromDB(id);
    res.status(200).json({
        status: "success",
        data: user
    })
}

export const getAdminUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = await getAdminUsersFromDb();
    res.status(200).json({
        status: "success",
        data: user
    })
}