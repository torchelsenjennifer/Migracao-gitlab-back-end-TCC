import { Router } from "express"

import { mentorCreate, mentorIndex, mentorAlteraSenha, getMentorById } from "./controllers/mentorController.js"
import { loginMentor } from "./controllers/logmentorController.js"
import { areaIndex } from "./controllers/areaController.js"

const router = Router()

router.get('/mentores', mentorIndex)
      .post('/mentores', mentorCreate)
      .put('/usuarios', mentorAlteraSenha)
	  .get('/mentores/:id', getMentorById)
	  .get('/login', loginMentor)
	  .get('/areas', areaIndex)

export default router