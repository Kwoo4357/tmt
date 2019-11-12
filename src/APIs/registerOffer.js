import express from 'express';
import JobOffer from "../models/jobOffer";

const router = express.Router();
router.use(express.json());

router.get('/', (req,res) => {
  //response register page
});

router.post('/', (req,res) => {
  //register by form data
  let newJobOffer = req.body;
  JobOffer.create(newJobOffer)
    .then(()=>res.status(200).end())
    .catch(e=>res.status(500).send(e));
});

export default router;
