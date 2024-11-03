import { Router } from 'express';
import ControllerMentor from './controllers/ControllerMentor.js';

const router = Router();
const controllerMentor = new ControllerMentor();

router.get('/mentores', controllerMentor.IndexMentor);
router.post('/mentores', controllerMentor.CreateMentor);
router.put('/mentores', controllerMentor.UpdatePasswordMentor);
router.get('/mentores/:id', controllerMentor.getMentorById);
router.post('/login', controllerMentor.LoginMentor);
router.delete('/mentores/:id', controllerMentor.DeleteMentor);

export default router;
