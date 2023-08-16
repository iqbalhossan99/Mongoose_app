import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        require: true,
        enum: ["student"]
    },
    password: {
        type: String,
        require: true
    },
    name: {
        firstName: {
            type: String,
            require: true
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            require: true
        }
    },
    dateOfBrith: {
        type: String
    },
    gender: {
        type: String,
        require: true,
        enum: ['male', 'female']
    },
    email: { type: String, unique: true },
    contactNo: {
        type: String,
        require: true
    },
    emergencyContgact: {
        type: String,
        require: true
    },
    presentAddress: {
        type: String,
        require: true
    },
    permanetAddress: { type: String, require: true }

});

userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
})

export const User = model<IUser, UserModel>("User", userSchema);
