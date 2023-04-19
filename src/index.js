require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.POSTGRES_PORT;
const EventoRouter = require('./routers/EventoRouter');



app.use('/eventos', EventoRouter);




app.listen(
    port,
    () => {
        console.log(`Evento listening on port ${port}`);
        }   
)