import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Mentor } from '../models/Mentor.js';

dotenv.config();

export default class ControllerMentor {
    async IndexMentor(req, res) {
        try {
            const mentores = await Mentor.findAll();
            res.status(200).json(mentores);
        } catch (error) {
            console.error('Erro ao buscar mentores: ', error.message);
            res.status(400).json({ erro: 'Erro ao buscar mentores' });
        }
    }

    async CreateMentor(req, res) {
        const data = req.body;
        if (!data.email || !data.senha) {
            return res.status(400).json({ erro: 'Informe Email e senha' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ erro: 'Erro interno do servidor' });
        }

        try {
            const mentor = await Mentor.create({ ...data });
            const token = jwt.sign({ id: mentor.id, email: mentor.email }, jwtSecret, { expiresIn: '1h' });
            res.status(201).json({ mentor, token, message: 'Mentor criado com sucesso' });
        } catch (error) {
            console.error('Erro ao criar mentor: ', error.message);
            res.status(400).json({ erro: 'Erro ao criar mentor' });
        }
    }

    async UpdatePasswordMentor(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: 'Informe Email e senha' });
        }

        try {
            const mentor = await Mentor.findOne({ where: { email } });

            if (!mentor) {
                return res.status(404).json({ erro: 'Mentor não encontrado' });
            }

            const hash = await bcrypt.hash(senha, 10);
            mentor.senha = hash;
            await mentor.save();

            res.status(200).json({ message: 'Senha atualizada com sucesso', mentor });
        } catch (error) {
            console.error('Erro ao alterar senha: ', error.message);
            res.status(400).json({ erro: 'Erro ao alterar senha' });
        }
    }

    async getMentorById(req, res) {
        const { id } = req.params;

        try {
            const mentor = await Mentor.findByPk(id);

            if (!mentor) {
                return res.status(404).json({ erro: 'Mentor não encontrado' });
            }

            res.status(200).json(mentor);
        } catch (error) {
            console.error('Erro ao buscar mentor: ', error.message);
            res.status(400).json({ erro: 'Erro ao buscar mentor' });
        }
    }

    async DeleteMentor(req, res) {
        const { id } = req.params;

        try {
            const mentor = await Mentor.findByPk(id);

            if (!mentor) {
                return res.status(404).json({ erro: 'Mentor não encontrado' });
            }

            await mentor.destroy();
            res.status(200).json({ mensagem: 'Mentor deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar mentor: ', error.message);
            res.status(400).json({ erro: 'Erro ao deletar mentor' });
        }
    }

    async LoginMentor(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ erro: 'Informe Email e senha' });
        }

        try {
            const mentor = await Mentor.findOne({ where: { email } });

            if (!mentor) {
                return res.status(404).json({ erro: 'Mentor não encontrado' });
            }

            const isPasswordValid = await bcrypt.compare(senha, mentor.senha);

            if (!isPasswordValid) {
                return res.status(401).json({ erro: 'Senha inválida' });
            }

            const token = jwt.sign({ id: mentor.id, email: mentor.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({ mentor, token });
        } catch (error) {
            console.error('Erro ao fazer login: ', error.message);
            res.status(400).json({ erro: 'Erro ao fazer login' });
        }
    }
}