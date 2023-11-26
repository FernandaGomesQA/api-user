const connection = require('./connection')

const getUsers = async () => {
    const [users] = await connection.execute('SELECT * FROM usuario LIMIT 100')
    return users
}

const getUser = async (id) => {
    const [user] = await connection.execute('SELECT * FROM usuario WHERE id = ?', [id])
    return user
}

const createUser = async (user) => {
    const { nome, email, aluno} = user

    const dateUtc = new Date(Date.now()).toUTCString()

    const queryInsert = 'INSERT INTO usuario (nome, email, aluno, criacaoData) VALUES (?, ?, ?, ?)'

    const [createdUser] = await connection.execute(queryInsert, [nome, email, aluno, dateUtc])
    return {insertId: createdUser.insertId, message: 'Usuário cadastrado com sucesso'}
}

const deleteUser = async (id) => {
    const removedUser = await connection.execute('DELETE FROM usuario WHERE id = ?', [id])
    return removedUser
}

const updateUser = async (id, user) => {
    const queryUpdate = 'UPDATE usuario SET email = ? WHERE id = ?'

    const {email} = user

    const updatedUser = await connection.execute(queryUpdate, [email, id])
    return updatedUser
}

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUser
}