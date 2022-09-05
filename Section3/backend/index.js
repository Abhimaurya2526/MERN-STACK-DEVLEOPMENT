// importing express

const express = require('express');
const userRouter = require ('./routers/userRouter');
const vedioRouter = require('./routers/vedioRouter')

const cors = require('cors');
// intilization express
const app = express();

const port = 5000;

app.use(express.json());
app.use(cors({origin : [
    'http://localhost:3000'
]}))

// middleware 
app.use('/user',userRouter);
app.use('/vedio',vedioRouter);


//route to process a request
//route or end point 
app.get('/', (req, res) => {
    res.send('Response from express');
})


//route or end point

app.get('/home',(req,res)=>{
    res.send('req form home')
})

app.listen( port, () => {
         console.log('server has started');
}

);