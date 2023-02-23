const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
    {
        username: "sammyjones",
        email: "sammyj@outlook.com",
        password: "password",
    },
    {
        username: "brucewayne",
        email: "brucewayne@live.com",
        password: "password",
    },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
