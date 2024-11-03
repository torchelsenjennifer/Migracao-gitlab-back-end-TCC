import { Router } from "express"

import { mentorCreate, mentorIndex, mentorAlteraSenha, getMentorById } from "./controllers/mentorController.js"
import { loginMentor } from "./controllers/logmentorController.js"

const router = Router()

router.get('/mentores', mentorIndex)
      .post('/mentoress', mentorCreate)
      .put('/usuarios', mentorAlteraSenha)
	  .get('/mentores/:id', getMentorById)

router.get('/login', loginMentor)




export default router