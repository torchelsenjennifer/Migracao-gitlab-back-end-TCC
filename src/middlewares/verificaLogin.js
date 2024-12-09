import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export const verificaLogin = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token, process.env.JWT_SECRET)


    req.user_logado_id = decode.id
    req.user_logado_nome = decode.nome


    next()
  } catch (error) {
    // Mostra o erro no console
    console.error("Erro na autenticação:", error)

    return res.status(401).send({ Erro: "Falha na Autenticação" })
  }
}
