import { Router } from "express"

import { mentorCreate, mentorIndex, mentorAlteraSenha, getMentorById, LoginMentor } from "./controllers/mentorController.js"
import { areaIndex } from "./controllers/areaController.js"

const router = Router()

router.get('/mentores', mentorIndex)
      .post('/mentores', mentorCreate)
      .put('/usuarios', mentorAlteraSenha)
	  .get('/mentores/:id', getMentorById)
	  .post('/login', LoginMentor)
	  .get('/areas', areaIndex)


export default router