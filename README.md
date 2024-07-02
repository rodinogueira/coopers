# COOPERS

Criar um Novo Usuário
Para criar um novo usuário na aplicação, envie uma requisição POST para o endpoint /signup. Utilizando Postman, Insomnia

Endpoint:

POST localhost:5002/signup
Corpo da Requisição (JSON):

{
    "name": "Rodrigo Nogueira",
    "email": "rdg6design@gmail.com",
    "password": "456123"
}

ou

body > raw

{
    "name": "John Doe",
    "email": "john.doe@gmail.com",
    "password": "456123"
}

## Retorno

{
    "name": "Rodrigo Nogueira",
    "email": "rdg6design@gmail.com",
    "password": "$2b$10$FSSEc6hyAasXHpmxeu9yTuS4mset0AOLtayDQ3wEyzN.zw/CBLecq",
    "createdAt": "2024-07-02T19:56:40.946Z",
    "_id": "66845ddf829fa2496a01146f",
    "__v": 0
}

Código de Status HTTP:

201 Created - Indica que o usuário foi criado com sucesso.

Este endpoint permite registrar um novo usuário na aplicação. O corpo da requisição deve conter o nome (name), email (email) e senha (password) do usuário a ser registrado. Após a criação bem-sucedida, a resposta incluirá os detalhes do usuário recém-criado, incluindo um _id único e a data de criação (createdAt).