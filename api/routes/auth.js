//auth and register endpoint
import express  from "express";

const router = express.Router();
//create
//update
//delete
//get
//get all
router.get('/', (req, res) => {
  res.send('This is auth endpoint');
})

router.get("/register", (req, res) => {
  res.send("This is registration")
})

export default router;