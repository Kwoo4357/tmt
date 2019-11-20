import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
  //response main HTML page
  res.render('main.html');
});

export default router;
