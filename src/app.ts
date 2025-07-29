import express, {Express, Request, Response} from "express";
import productRoutes from "./routes/product.routes";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import {authenticateToken} from "./middleware/auth.middleware";

//  1. Initialize the express app
const app : Express = express();

//  2. Defin Middlewares
//  2.1 Instruct to parse the request payload data to be converted to JSON format
app.use(express.json())

// app.use(cors());  //enable|allow CORS
const allowOrigins = ["http://localhost:5173"];
const corsOptions = {
    origin: (origin: string | undefined, callback: (err: Error | null, allow?:boolean) => void)=> {
        if(!origin || allowOrigins.includes(origin)){
            callback(null, true);
        }else {
            callback(new Error("Not allowed by CORS"))
        }
    }
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoutes)
app.use("/api/products", authenticateToken , productRoutes); // 2.2 Register the product routes

// app.use()


//  3. Define a simple HTTP Get Request
// app.get('/', (req: Request, res: Response) => {
//     console.log(req.body)
//     res.send("Hello Tharidi,  How are you....!");
// });


export default app;
