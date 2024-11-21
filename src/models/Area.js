import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Area = sequelize.define('area', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descricao: {
      type: DataTypes.STRING(60),
      allowNull: false
    }
  });
