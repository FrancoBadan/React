import { Sequelize } from "sequelize";

//nombre de la db, user , contraseña, {donde esta alojada la db,lenguaje,puerto}
const db = new Sequelize(`socialmedia_23308`, "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

export default db;
