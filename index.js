const express = require('express');
const connectDb = require('./connection');
const userRouter = require('./routes/users');




connectDb();

const app = express();
const PORT = 3000

//security handling
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000/',
  optionsSuccessStatus: 200
}

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use('/api/users', userRouter);


app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)});