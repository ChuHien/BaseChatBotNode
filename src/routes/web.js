import express from "express";
import homePageController from "../controllers/homePageController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homePageController.getHomePage)
    return app.use('/', router)
}

export default initWebRoute;
