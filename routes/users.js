import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    const userId = uuidv4();

    const userWithId = { ...user, id: userId };

    users.push(userWithId);
    res.send(`Post Routes has been done for ${user.firstName}`);
});

router.get('/:id', (req, res) => {
    res.send('The GET ID Route');
});

export default router;
