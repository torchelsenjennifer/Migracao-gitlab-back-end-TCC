import bcrypt from "bcrypt";
import { Mentor } from "../models/Mentor.js";
import { Log } from "../models/Log.js";

import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    cb(null, Date.now() + extname);
  },
});

const upload = multer({ storage: storage });

function validaSenha(senha) {
  const mensa = [];

  if (senha.length < 8) {
    mensa.push("Erro... senha deve possuir, no mínimo, 8 caracteres");
  }

  let pequenas = 0;
  let grandes = 0;
  let numeros = 0;
  let simbolos = 0;

  for (const letra of senha) {
    if (/[a-z]/.test(letra)) {
      pequenas++;
    } else if (/[A-Z]/.test(letra)) {
      grandes++;
    } else if (/[0-9]/.test(letra)) {
      numeros++;
    } else {
      simbolos++;
    }
  }

  if (pequenas == 0 || grandes == 0 || numeros == 0 || simbolos == 0) {
    mensa.push(
      "Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos"
    );
  }

  return mensa;
}

export const mentorIndex = async (req, res) => {
	try {
	  const { area_id } = req.query; // Obtém o parâmetro `area_id` da URL

	  const whereClause = area_id ? { area_id } : {}; // Condição: se houver `area_id`, filtra por ele

	  const mentores = await Mentor.findAll({
		where: whereClause, // Aplica a cláusula WHERE com base no `area_id`
	  });

	  res.status(200).json(mentores);
	} catch (error) {
	  console.error("Erro ao buscar mentores: ", error.message);
	  res.status(400).send(error);
	}
  };

export const mentorCreate = async (req, res) => {
  const uploadMiddleware = upload.single("foto");

  uploadMiddleware(req, res, async (err) => {
    if (err) {
      console.error("Erro ao fazer upload do arquivo:", err);
      return res.status(500).json({ id: 0, msg: "Erro no upload do arquivo" });
    }

    const {
      nome,
      email,
      senha,
      profissao,
      telefone,
      descricao,
      linkedin,
      calendly,
	  area_id
    } = req.body;

    const mensaValidacao = validaSenha(senha);
    if (mensaValidacao.length >= 1) {
      return res.status(400).json({ id: 0, msg: mensaValidacao });
    }

    const foto = req.file ? req.file.filename : null;

    try {
      const mentor = await Mentor.create({
        nome,
        email,
        profissao,
        telefone,
        descricao,
        linkedin,
        calendly,
        foto,
        senha,
		area_id
      });
      res.status(201).json(mentor);
    } catch (error) {
      console.error("Erro ao criar mentor: ", error.message);
      res.status(400).send(error);
    }
  });
};

export const mentorAlteraSenha = async (req, res) => {
  const { email, senha, novaSenha } = req.body;

  if (!email || !senha || !novaSenha) {
    return res.status(400).json({ id: 0, msg: "Erro... Informe os dados" });
  }

  try {
    const mentor = await Mentor.findOne({ where: { email } });

    if (!mentor) {
      return res.status(400).json({ erro: "Erro... E-mail inválido" });
    }

    const mensaValidacao = validaSenha(novaSenha);
    if (mensaValidacao.length >= 1) {
      return res.status(400).json({ id: 0, msg: mensaValidacao });
    }

    if (bcrypt.compareSync(senha, mentor.senha)) {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(novaSenha, salt);
      mentor.senha = hash;

      // Salva a nova senha
      await mentor.save();
      res.status(200).json({ msg: "Ok. Senha Alterada com Sucesso" });
    } else {
      // Registra um log da tentativa de troca de senha
      await Log.create({
        descricao: "Tentativa de Alteração de Senha",
        mentor_id: mentor.id,
      });
      res.status(400).json({ erro: "Erro... Senha inválida" });
    }
  } catch (error) {
    console.error("Erro ao alterar a senha: ", error.message);
    res.status(400).json(error);
  }
};

export const getMentorById = async (req, res) => {
  const { id } = req.params;

  try {
    const mentor = await Mentor.findByPk(id);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json(mentor);
  } catch (error) {
    console.error("Erro ao recuperar mentor: ", error.message);
    res.status(500).json({
      message: "Error retrieving mentor",
      error: error.message,
    });
  }
};
