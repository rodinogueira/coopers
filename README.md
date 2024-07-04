# COOPERS

### Acessar a aplicação coopers netlify

[coopers netlify](https://teste-coopers.netlify.app)

### Acessar a aplicação coopers aws

[coopers aws](http://ec2-54-89-143-244.compute-1.amazonaws.com)

## Como rodar o projeto em localhost:

## Criar um Novo Usuário

É necessário criar um novo usuário na aplicação. Para isso, envie uma requisição POST para o endpoint `/signup` utilizando ferramentas como Postman ou Insomnia.

### Endpoint:

**POST** `http://localhost:5002/signup`

### Corpo da Requisição: (JSON)

```json
{
    "name": "Rodrigo Nogueira",
    "email": "rdg6design@gmail.com",
    "password": "456123"
}
