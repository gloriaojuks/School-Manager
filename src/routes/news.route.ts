import express, { Request, Response, NextFunction} from 'express'

export const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('news route reached');
})

router.post('/', (req: Request, res: Response) => {
    res.send('news route reached');
})

router.put('/:id', (req: Request, res: Response) => {
    res.send('news route reached');
})

router.delete('/:id', (req: Request, res: Response) => {
    res.send('news route reached');
})