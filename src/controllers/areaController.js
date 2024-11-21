import { Area } from "../models/Area.js";

export const areaIndex = async (req, res) => {
	try {
	  const areas = await Area.findAll();
	  res.status(200).json(areas);
	} catch (error) {
	  console.error("Erro ao buscar areas: ", error.message);
	  res.status(400).send(error);
	}
  };