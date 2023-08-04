const { db } = require("../models/db")
const initModels = require("../models/init-models");

const users = initModels(db).tbl_users;
const getAllUsers = async () => {
    try {
        const user = await users.findAll();
        return user;
    } catch (err) {
        return { err: 'error occured' }
    }
}


const createUser = async (payload) => {
    try {
        const user = users.create({
            full_name: payload.full_name,
            email: payload.email,
        })
        return { message: "success" }

    } catch (error) {
        return { err: "error occured" }
    }
}



module.exports = { getAllUsers, createUser }