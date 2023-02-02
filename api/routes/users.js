import express from "express";

const router = express.Router();
//create
//update
//delete
//get
//get all
router.get('/', (req, res)=>{
  res.send('This is users endpoint')
})

export default router;