import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Node (write with Typescript S2)');
})

app.listen(3333);