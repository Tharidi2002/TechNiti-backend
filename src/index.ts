import app from "./app"
import dotenv from "dotenv"
import DBConnection from "./db/DBConnection";
import {reset} from "nodemon";

dotenv.config();    // Lode the environment variables from .env file


DBConnection().then(result => console.log(result))

//  2. Define the application port
const port = process.env.PORT || 3000;  // Access the port

//  4. Instructs the express app to listen on port 3000
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});