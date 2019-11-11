import express from 'express';

const router = express.Router();
router.use(express.json());

router.get('/:offerId', (req,res)=>{
  //response a job offer data by JSON
});

router.get('/', (req,res) => {
  //response job offers list by JSON array
  //require start(skip)
});

export default router;
