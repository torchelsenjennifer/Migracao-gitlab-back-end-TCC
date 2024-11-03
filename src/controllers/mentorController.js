import bcrypt from 'bcrypt';
import { Mentor } from '../models/Mentor.js';
import { Log } from '../models/Log.js';

function validaSenha(senha) {
    const mensa = [];

    // .length: retorna o tamanho da string (da senha)
    if (senha.length < 8) {
        mensa.push('Erro... senha deve possuir, no mínimo, 8 caracteres');
    }

    // contadores
    let pequenas = 0;
    let grandes = 0;
    let numeros = 0;
    let simbolos = 0;

    // percorre as letras da variável senha
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
            'Erro... senha deve possuir letras minúsculas, maiúsculas, números e símbolos',
        );
    }

    return mensa;
}

export const mentorIndex = async (req, res) => {
    try {
        const mentores = await Mentor.findAll();
        res.status(200).json(mentores);
    } catch (error) {
        console.error('Erro ao buscar mentores: ', error.message);
        res.status(400).send(error);
    }
};

export const mentorCreate = async (req, res) => {
    const {
        nome,
        email,
        senha,
        cpf,
        telefone,
        interesse,
        descricao,
        linkedin,
        calendly,
        foto,
    } = req.body;

    const mensaValidacao = validaSenha(senha);
    if (mensaValidacao.length >= 1) {
        return res.status(400).json({ id: 0, msg: mensaValidacao });
    }

    try {
        const mentor = await Mentor.create({
            nome,
            email,
            cpf,
            telefone,
            interesse,
            descricao,
            linkedin,
            calendly,
            foto,
            senha,
        });
        res.status(201).json(mentor);
    } catch (error) {
        console.error('Erro ao criar mentor: ', error.message);
        res.status(400).send(error);
    }
};

export const mentorAlteraSenha = async (req, res) => {
    const { email, senha, novaSenha } = req.body;

    // Validação de campos obrigatórios
    if (!email || !senha || !novaSenha) {
        return res.status(400).json({ id: 0, msg: 'Erro... Informe os dados' });
    }

    try {
        const mentor = await Mentor.findOne({ where: { email } });

        if (!mentor) {
            return res.status(400).json({ erro: 'Erro... E-mail inválido' });
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
            res.status(200).json({ msg: 'Ok. Senha Alterada com Sucesso' });
        } else {
            // Registra um log da tentativa de troca de senha
            await Log.create({
                descricao: 'Tentativa de Alteração de Senha',
                mentor_id: mentor.id,
            });
            res.status(400).json({ erro: 'Erro... Senha inválida' });
        }
    } catch (error) {
        console.error('Erro ao alterar a senha: ', error.message);
        res.status(400).json(error);
    }
};

export const getMentorById = async (req, res) => {
    const { id } = req.params;

    try {
        const mentor = await Mentor.findByPk(id);

        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }

        res.status(200).json(mentor);
    } catch (error) {
        console.error('Erro ao recuperar mentor: ', error.message);
        res.status(500).json({
            message: 'Error retrieving mentor',
            error: error.message,
        });
    }
};