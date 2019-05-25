import express, { Request, Response, NextFunction} from 'express';
import { createUser, checkUser } from '../controllers/user/createUser.controller';
import { authController, verifyToken } from '../controllers/user/auth.controller';

export const router = express.Router();


// authentication for the user
router.post('/auth', authController);

// creating a new user/student
router.post('/', checkUser, createUser);

router.get('/:id', (req: Request, res: Response) => {
    let id = req.params.id;
    res.json({
        id,
    })
})


router.put('/:id', verifyToken, (req: Request, res: Response) => {
    let id = req.params.id;
    res.json({
        id,
    })
})

// get all subjects
router.get('/:id/subjects', (req: Request, res: Response) => {
    let id = req.params.id;
    res.json({
        id,
    })
})

// create new subjects
router.post('/:id/subjects', (req: Request, res: Response) => {
    let id = req.params.id;
    res.json({
        id,
    })
})

// update exisiting subjects
router.put('/:id/subjects/:subjectId', (req: Request, res: Response) => {
    let id = req.params.id;
    let subjectId = req.params.subjectId;
    res.json({
        id,
        subjectId
    })
})


// delete existing subjects
router.delete('/:id/subjects/:subjectId', (req: Request, res: Response) => {
    let id = req.params.id;
    let subjectId = req.params.subjectId;
    res.json({
        id,
        subjectId
    })
})