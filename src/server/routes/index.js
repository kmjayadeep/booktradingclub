import express from 'express';
import BookController from "./book";
import AuthController from "./auth";
import UserController from "./user";


const controller = express.Router();

controller.use("/auth", AuthController);
controller.use("/book", BookController);
controller.use('/user',UserController)

controller.get('/',(req,res)=>{
    res.send('BookSharing Api v1.0');
})

export default controller;