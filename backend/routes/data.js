import express from "express";
import { getAllData } from '../controllers/data.js'
const Router = express.Router();

Router.route('/all/data').get(getAllData);

export default Router