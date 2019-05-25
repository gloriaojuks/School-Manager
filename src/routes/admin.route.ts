import express, { Request, Response, NextFunction} from 'express'

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Admin route reached');
});

router.post('/auth', (req: Request, res: Response) => {
    let body = req.body;
    res.send(body);
});

router.post('/create', (req: Request, res:Response) => {
    let body = req.body;
    res.send(body);
});

router.get('/:id', (req: Request, res: Response) => {
    let params = req.params.id;
    res.send(params);
})

router.put('/:id', (req: Request, res: Response) => {
    let params = req.params.id;
    res.send(params);
})

router.delete('/:id', (req: Request, res: Response) => {
    let params = req.params.id;
    res.send(params);
})