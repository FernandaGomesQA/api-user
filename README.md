# Api-User

Api simples de cadastro e busca de usuários em Node.js.

Possui: 
- Endpoint de cadastro de usuário;
- Endpoint de busca de usuários em larga escala;
- Endpoint de busca de usuário por parâmetro;
- Endpoint de alteração de email, do cadastro do usuário;
- Endpoint para deleção de usuários, por parâmetro.

# Requirement

- [Node.js]
- [Docker]
- [Express]
- [Nodemon]
- [Postman]

Obs.: Este projeto utiliza uma imagem do mysql em um container docker.

# Running

Para subir o servidor, execute o comando:

```sh
npm run dev
```

Para executar os endpoints, use o Postman ou Insomnia, passando localhost:porta/rotaDoEndpoint