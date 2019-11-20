import server from './src/server'
import dbConnect from './src/util/dbConnect'
import dotenv from 'dotenv'

const serverRun = (() => {
  dotenv.config();
  dbConnect();
  server.listen(process.env.port, ()=>{console.log("server run on "+process.env.port+" port");});
})();
