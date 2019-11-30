import express from 'express';
import JobOffer from "../models/jobOffer";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded( {extended : false } ));

router.get('/', (req,res) => {
  //response register page
  res.render('registerOfferPage.html');
});

router.post('/', (req,res) => {
  //register by form data
  JobOffer.create(req.body)
    .then(()=>res.status(200).end())
    .catch(e=>res.status(500).send(e));
});

export default router;
