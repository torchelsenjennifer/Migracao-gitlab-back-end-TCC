import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes.js';

import { sequelize } from './databases/conecta.js';
import { Mentor } from './models/Mentor.js';
// import { Log } from './models/Log.js';

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

async function conecta_db() {
    try {
        await sequelize.authenticate();
        console.log('Conex�o com banco de dados estabelecida com sucesso!');

        await Mentor.sync();
        // await Log.sync();
        //await Livro.sync()
        //await Cadastro.sync()

        await sequelize.sync({ alter: true }); // Verifica se h� altera��es e atualiza as tabelas se houver
        await sequelize.sync();
    } catch (error) {
        console.error('Erro na conex�o com o banco: ', error);
    }
}
conecta_db();

app.get('/', (req, res) => {
    res.send('PDI');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});