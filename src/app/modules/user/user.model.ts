import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods>;

export const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        require: true,
        unique: true
    },
    role: {
        type: String,
        require: true,
        enum: ["student", "admin"]
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

// methods
userSchema.method("fullName", function fullName() {
    return this.name.firstName + " " + this.name.lastName;
})

// statics
userSchema.static("getAdminUsers", async function getAdminUsers() {
    const admins = await this.find({ role: "admin" });
    return admins;
})

export const User = model<IUser, UserModel>("User", userSchema);
