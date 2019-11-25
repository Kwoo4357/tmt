import express from 'express';
import JobOffer from '../models/jobOffer';

const router = express.Router();
router.use(express.json());

router.get('/:offerId', (req,res)=>{
  //response a job offer data by JSON
  JobOffer.findByJobOfferId(req.params.offerId)
    .then(offer=>res.json(offer))
    .catch(e=>res.status(500).send(e));
});

router.get('/', (req,res) => {
  //response job offers list by JSON array
  //require start(skip)
  if(req.query.start === undefined){
    res.render('jobOffers.html');
    return;
  }
  
  JobOffer.findUsingStart(req.query.start)
    .then(offers=>res.json(offers))
    .catch(e=>res.status(500).send(e));
});

export default router;
