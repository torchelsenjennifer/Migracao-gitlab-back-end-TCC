import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { Mentor } from "../models/Mentor.js";
import { Log } from "../models/Log.js";

import * as dotenv from 'dotenv'
dotenv.config()

export const loginMentor = async (req, res) => {
  const { email, senha } = req.body
  const mensaErroPadrao = "Erro... Login ou senha inválido"

  if (!email || !senha) {
    res.status(400).json({ erro: mensaErroPadrao})
    return
  }

  try {
    const mentor = await Mentor.findOne({ where: { email } })

    if (mentor == null) {
      res.status(400).json({ erro: mensaErroPadrao})
      return
    }

    if (bcrypt.compareSync(senha, mentor.senha)) {
      const token = jwt.sign({
        user_logado_id: mentor.id,
        user_logado_nome: mentor.nome
      },
        process.env.JWT_KEY,
        { expiresIn: "1h" }
      )

      res.status(200).json({msg: "Ok. Logado", token})
    } else {

      // registra um log desta tentativa de acesso
      await Log.create({
        descricao: "Tentativa de Acesso com Senha Inválida",
        mentor_id: mentor.id
      })

      // res.status(400).json({ erro: "Erro... Senha inválida" })
      res.status(400).json({ erro: mensaErroPadrao})
    }
  } catch (error) {
    res.status(400).json(error)
  }
}
