import express from "express";
import cors from "cors";
import routes from "./routes.js";
import path from 'path';

import { sequelize } from "./databases/conecta.js";
import { Mentor } from "./models/Mentor.js";
import { Log } from "./models/Log.js";
import { Area } from "./models/Area.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());
app.use(routes);

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com banco de dados estabelecida com sucesso!");

	await Area.sync();
    await Mentor.sync();
    await Log.sync();


    await sequelize.sync({ alter: true });
    await sequelize.sync();
  } catch (error) {
    console.error("Erro na conexão com o banco: ", error);
  }
}
conecta_db();

app.get("/", (req, res) => {
  res.send("PDI");
});


app.use('/uploads', express.static(path.join(process.cwd(), 'upload')));


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
