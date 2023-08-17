import { IUser } from "./user.interface";
import { User } from "./user.model";

// create new user to database
export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = await new User(payload);
    await user.save();

    console.log(user.fullName());
    return user;

};

// get all users from database
export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();

    return users;
}

// get signle user according to id from database
export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
    return user;
}

// get only admin role user
export const getAdminUsersFromDb = async () => {
    const admins = await User.getAdminUsers();
    return admins;
}