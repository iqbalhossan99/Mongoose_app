import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./app/modules/user/user.route";
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRoutes);




export default app;