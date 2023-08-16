export interface IUser {
    id: string;
    role: "student";
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


export interface IUserMethods {
    fullName(): string;
}