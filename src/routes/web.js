import express from "express";
import homePageController from "../controllers/homePageController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homePageController.getHomePage);
    router.post('/webhook', homePageController.postWebhook);
    router.get('/webhook', homePageController.getWebhook)
    return app.use('/', router)
}

export default initWebRoute;
