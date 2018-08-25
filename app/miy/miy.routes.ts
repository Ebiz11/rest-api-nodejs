import { Router, Request, Response, json } from 'express';
import miyController from './controllers/miy.controller';
import {ibuah} from '../interface/ibuah';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    miyController.get_data((data:ibuah[]) => {
        res.send(JSON.stringify(data))
    })
});

router.delete('/:id', (req: Request, res: Response) => {
    let id = req.params.id;

    miyController.delete_buah(id, (data:ibuah[]) => {
        res.send(JSON.stringify(data))
    })
    
});

export const miyRoutes: Router = router;