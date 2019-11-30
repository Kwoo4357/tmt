import express from 'express';
import JobOffer from '../models/jobOffer';
import Location from '../models/location'

const router = express.Router();
router.use(express.json());

router.get('/details/:offerId', (req, res) => {
  //response a job offer data by JSON
  JobOffer.findByJobOfferId(req.params.offerId)
    .then(offer => res.json(offer))
    .catch(e => res.status(500).send(e));
});

router.get('/locations', (req,res)=>{
  Location.find()
    .then(locations=>res.json(locations))
    .catch(e=>res.status(500).send(e));
});

router.get('/', (req, res) => {
  //response job offers list by JSON array
  //require start(skip)
  if (req.query.start === undefined) {
    res.render('offerListPage.html');
    return;
  }
  
  if (req.query.location === undefined) {
    JobOffer.findUsingStart(req.query.start)
      .then(offers => res.json(offers))
      .catch(e => res.status(500).send(e));
  } else {
    JobOffer.findByLocationUsingStart(req.query.location, req.query.start)
      .then(offers => res.json(offers))
      .catch(e => res.status(500).send(e));
  }
});

export default router;
