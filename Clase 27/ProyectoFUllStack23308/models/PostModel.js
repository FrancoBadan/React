//importamos la db
import db from "../database/db.js";
import { DataTypes } from "sequelize";

const PostModel=db.define("posts",{
    title:{type:DataTypes.STRING},
    contenido:{type:DataTypes.STRING}
})

export default PostModel;