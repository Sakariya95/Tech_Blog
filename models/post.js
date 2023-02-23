const { model, dataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class post extends model { }


post.init(
    {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        comment_id: {
            type: dataTypes.INTEGER,
        },

        user_id: {
            type: dataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);

module.exports = post;