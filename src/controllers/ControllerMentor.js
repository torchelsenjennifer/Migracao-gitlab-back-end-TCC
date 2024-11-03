import bcrypt from 'bcrypt';
import { Mentor } from '../models/Mentor.js';

export default class ControllerMentor {
    async IndexMentor(req, res) {
        try {
            const mentores = await Mentor.findAll();
            res.status(200).json(mentores);
        } catch (error) {
            console.error('Erro ao buscar mentores: ', error.message);
            res.status(400).send(error);
        }
    }

    async CreateMentor(req, res) {
        const data = req.body;
        // COLOCAR OUTROS QUE ACHA QUE PRECISA SER OBRIGATORIOS #EHUSGURI!!!
        if (!data.email || !data.senha) {
            res.status(400).json({ erro: 'Informe Email e senha' });
            return;
        }

        try {
            const mentor = await Mentor.create({
                ...data,
            });
            res.status(201).json(mentor);
        } catch (error) {
            console.error('Erro ao criar mentor: ', error.message);
            res.status(400).send(error);
        }
    }

    async UpdatePasswordMentor(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            res.status(400).json({ erro: 'Informe Email e senha' });
            return;
        }

        try {
            const mentor = await Mentor.findOne({ where: { email } });

            if (!mentor) {
                res.status(404).json({ erro: 'Mentor não encontrado' });
                return;
            }

            const hash = await bcrypt.hash(senha, 10);
            mentor.senha = hash;
            await mentor.save();

            res.status(200).json(mentor);
        } catch (error) {
            console.error('Erro ao alterar senha: ', error.message);
            res.status(400).send(error);
        }
    }

    async getMentorById(req, res) {
        const { id } = req.params;

        try {
            const mentor = await Mentor.findByPk(id);

            if (!mentor) {
                res.status(404).json({ erro: 'Mentor não encontrado' });
                return;
            }

            res.status(200).json(mentor);
        } catch (error) {
            console.error('Erro ao buscar mentor: ', error.message);
            res.status(400).send(error);
        }
    }

    async DeleteMentor(req, res) {
        const { id } = req.params;

        try {
            const mentor = await Mentor.findByPk(id);

            if (!mentor) {
                res.status(404).json({ erro: 'Mentor não encontrado' });
                return;
            }

            await mentor.destroy();

            res.status(200).json({ mensagem: 'Mentor deletado com sucesso' });
        } catch (error) {
            console.error('Erro ao deletar mentor: ', error.message);
            res.status(400).send(error);
        }
    }

    async LoginMentor(req, res) {
        const { email, senha } = req.body;

        if (!email || !senha) {
            res.status(400).json({ erro: 'Informe Email e senha' });
            return;
        }

        try {
            const mentor = await Mentor.findOne({ where: { email } });

            if (!mentor) {
                res.status(404).json({ erro: 'Mentor não encontrado' });
                return;
            }

            const hash = await bcrypt.compare(senha, mentor.senha);

            if (!hash) {
                res.status(401).json({ erro: 'Senha inválida' });
                return;
            }

            res.status(200).json(mentor);
        } catch (error) {
            console.error('Erro ao fazer login: ', error.message);
            res.status(400).send(error);
        }
    }
}
