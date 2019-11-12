import express from 'express';
import jobOffers from "./APIs/jobOffers";
import registerOffer from "./APIs/registerOffer";
import main from "./APIs/main";

const server =  express();

server.use('/', main);
server.use('/jobOffers', jobOffers);
server.use('/registerOffer', registerOffer);

export default server;
