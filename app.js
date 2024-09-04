import express from 'express';


const app = express();

app.get('/', (req, res) => {res.send('Hola desde api')})




app.listen(3000);



