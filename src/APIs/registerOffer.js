import express from 'express';

const router = express.Router();
router.use(express.json());

router.get('/', (req,res) => {
  //response register page
});

router.post('/', (req,res) => {
  //register by form data
});

export default router;
