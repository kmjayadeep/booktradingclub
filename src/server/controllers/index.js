import express from 'express';
import BookController from './book'


const controller = express.Router();

controller.use('/book',BookController)

controller.get('/',(req,res)=>{
    res.send('BookSharing Api v1.0')
})

export default controller;