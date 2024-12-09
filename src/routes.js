import { Router } from "express"

import { mentorCreate, mentorIndex, mentorAlteraSenha, getMentorById, LoginMentor, mentorAlteraPerfil, setPremium } from "./controllers/mentorController.js"
import { areaIndex } from "./controllers/areaController.js"
import { verificaLogin } from "./middlewares/verificaLogin.js"; // Caminho correto para o middleware


const router = Router()

router.get('/mentores', mentorIndex)
      .post('/mentores', mentorCreate)
      .put('/usuarios', mentorAlteraSenha)
	  .get('/mentores/:id', getMentorById)
	  .post('/login', LoginMentor)
	  .get('/areas', areaIndex)
	  .put('/mentor/alterar/:id', mentorAlteraPerfil)
	  .put('/mentor/premium',verificaLogin, setPremium)

export default router