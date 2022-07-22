import express from "express";
export const app = express();
import path from 'path'
import data from './routes/data.js';


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', data);

app.use(express.static(path.resolve("./frontend/build")));
app.get('/*', function(req, res) {
    res.sendFile(path.resolve("./frontend/build/index.html"));
});