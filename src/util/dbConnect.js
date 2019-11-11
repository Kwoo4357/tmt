import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const dbConnect = ()=>{
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(()=>console.log('connecting'))
    .catch(e=>console.log(e));
};

export default dbConnect;
