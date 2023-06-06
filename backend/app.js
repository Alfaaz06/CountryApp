import express from "express";
export const app = express();
import path from 'path'
import data from './routes/data.js';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', data);

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});