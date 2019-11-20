import express from 'express';
import jobOffers from "./router/jobOffers";
import registerOffer from "./router/registerOffer";
import main from "./router/main";
import path from 'path';
import ejs from 'ejs';

const server = express();


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.engine('html', require('ejs').renderFile);
server.use(express.static('public'));

server.use('/', main);
server.use('/jobOffers', jobOffers);
server.use('/registerOffer', registerOffer);

export default server;
