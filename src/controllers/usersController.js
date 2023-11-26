const userModel = require('../models/userModel')

const getUsers = async (_request, response) => {
    
    const users = await userModel.getUsers()
    
    return response.status(200).json(users)
}

const getUser = async (request, response) => {
    const { id } = request.params

    const user = await userModel.getUser(id)
    return response.status(200).json(user)
}

const createUser = async (request, response) => {
    const createdUser = await userModel.createUser(request.body)
    return response.status(201).json(createdUser)
}

const deleteUser = async (request, response) => {
    const { id } = request.params

    await userModel.deleteUser(id)
    return response.status(204).json()
}

const updateUser = async (request, response) => {
    const {id} = request.params

    await userModel.updateUser(id, request.body)
    return response.status(200).json({ message: 'Dados alterados com sucesso '})
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser
}