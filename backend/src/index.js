import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { initSocket } from "./lib/socket.js";
import http from "http";
import path from "path";
dotenv.config();

const app = express();

const server = http.createServer(app);
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json({ limit: "10mb" })); // allows to extract json out of body and allows size higher if needed
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(cookieParser()); //allows you to parse the cookies
app.use(cors({
    origin: "http://localhost:5173", // our frontend
    credentials: true // allow the cookies and auth headers to be sent with the request
}));
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));
    app.get("/*splat",(req,res) => {
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}
initSocket(server);

server.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB();
});