const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

const EventoRouter = require('./routers/EventoRouter');

app.use('/eventos', EventoRouter);

app.listen(
    port,
    () => {
        console.log(`Evento listening on port ${port}`);
        }   
)