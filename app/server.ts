import express from 'express';
import { miyRoutes } from './miy/miy.routes';

const app: express.Application = express();
const port = process.env.PORT || 4100;

app.use('/buah', miyRoutes);
app.get('/', function(req, res, next){
    res.send('buka http://localhost:4100/buah/');
})

app.use((req, res, next) => {
    if(res.status(404))
        res.send('404');
        // res.redirect('/buah');
});

app.listen(port, () =>  console.log(`Listening on http://localhost:${port}/`));