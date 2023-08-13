
import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

main().catch(err => console.log(err))
// database connect
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1.27017/test')
        console.log("Database conneciotn successful")
        app.listen(port, () => {
            console.log(`Example app listener on port ${port}`);
        })
    } catch (err) {
        console.log(err)
    }
}
main()


