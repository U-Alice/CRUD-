import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import {createUser, getUsers, getUser, deleteUser, updateUser} from '../../controllers/users.js'


const router = express.Router();

    router.get('/',getUsers);

router.post('/', createUser);


router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id', updateUser);


export default router;