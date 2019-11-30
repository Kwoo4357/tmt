import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
  //response main HTML page
  res.render('mainPage.html');
});

export default router;
