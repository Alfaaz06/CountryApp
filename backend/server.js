import { app } from "./app.js";
import { config } from 'dotenv'


config({
    path: 'backend/config/config.env'
})

app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
})