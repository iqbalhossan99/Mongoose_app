import { HydratedDocument, Model } from "mongoose";

export interface IUser {
    id: string;
    role: "student" | "admin";
    password: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBrith?: string;
    gender: "male" | "female";
    email?: string;
    contactNo: string;
    emergencyContgact: string;
    presentAddress: string;
    permanetAddress: string;
}

// Methods
export interface IUserMethods {
    fullName(): string;
}

// statics
export interface UserModel extends Model<IUser, {}, IUserMethods> {
    getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}