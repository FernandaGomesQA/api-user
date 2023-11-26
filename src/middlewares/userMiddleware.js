const validateBody = (request, response, next) => {
    const { body } = request

    if (body.nome === undefined) {
        return response.status(400).json({ error: true, message: ' O campo nome é obrigatório'})
    }

    if (body.email === undefined) {
        return response.status(400).json({ error: true, message: ' O campo email é obrigatório'})
    }

    if (body.aluno === undefined) {
        return response.status(400).json({ error: true, message: ' O campo aluno é obrigatório'})
    }

    if (body.nome === '') {
        return response.status(400).json({ error: true, message: ' Preencha o campo nome'})
    }

    if (body.email === '') {
        return response.status(400).json({ error: true, message: ' Preencha o campo email'})
    }

    if (body.aluno === '') {
        return response.status(400).json({ error: true,  message: ' Preencha o campo aluno'})
    }
    
    next()
}

const validateFieldEmail = (request, response, next) => {
    const { body } = request

    if (body.email === undefined) {
        return response.status(400).json({ error: true, message: ' O campo email é obrigatório'})
    }

    if (body.email === '') {
        return response.status(400).json({ error: true, message: ' Preencha o campo email'})
    }
    
    next()
}

module.exports = {
    validateBody,
    validateFieldEmail
}