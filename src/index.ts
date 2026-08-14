import express from "express";
import { main } from "./indexDb";
import rootRouter from "./routes";

const app = express();

app.use(express.json());

app.use("/api", rootRouter);

app.listen(3000, async () => {
    await main()
    console.log("🚀 Server is running on port 3000");
});