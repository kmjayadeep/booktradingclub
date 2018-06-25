import express from "express";
import {getAllUsers,editUser} from "../controllers/UserController";
const router = express.Router();

router.get('/', (req, res) => {
  getAllUsers().then(users => {
    res.json(users);
  });
});

router.put('/', (req, res) => {
  editUser(req.body).then(user => {
    res.json(user);
  }).catch(err=>{
    res.status(400).json({
      message: "Unable to save User",
      error: err
    })
  })
});

export default router;
