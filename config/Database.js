import { Sequelize } from "sequelize";

const db = new Sequelize('get-better', 'root', 'get-better', {
    host: "34.128.82.49",
    dialect: "mysql"
}); 

export default db;