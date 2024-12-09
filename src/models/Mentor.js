import { DataTypes } from "sequelize";
import bcrypt from 'bcrypt';
import { sequelize } from "../databases/conecta.js";
import { Area } from "./Area.js";

export const Mentor = sequelize.define('Mentor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false,
  },
  profissao: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING(18),
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  linkedin: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  calendly: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  foto: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  area_id: {
    type: DataTypes.INTEGER,
    allowNull: false, // Define que o campo é obrigatório
    references: {
      model: Area, // Relaciona com a tabela Area
      key: 'id', // Define qual campo é usado na referência
    },
  },
  empresa: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  formacao: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  premium: {
	type: DataTypes.BOOLEAN,
	allowNull: false,
  },
}, {
  tableName: 'mentores',
});

Mentor.beforeCreate(mentor => {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(mentor.senha, salt);
  mentor.senha = hash;
});

// Relacionamento: Mentor pertence a Area
Mentor.belongsTo(Area, {
  foreignKey: {
    name: 'area_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT', // Impede a exclusão de uma área em uso
  onUpdate: 'CASCADE', // Atualiza automaticamente o id de áreas
});

// Relacionamento: Area tem muitos Mentores
Area.hasMany(Mentor, {
  foreignKey: 'area_id',
});
