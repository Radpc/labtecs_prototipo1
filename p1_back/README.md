# Backend da aplicação protótipo

## Descrição

O backend utiliza como framework o Express.js, junto ao Mongoose (controle para o MongoDB)

## Requisitos

A API possui dois requisitos:
1. MongoDB
2. Node

O MongoDB deve estar rodando durante a execução da API.

## Setup

### Rodando o MongoDB

Para questões de facilitar o uso, e por ser um protótipo local, o sistema não necessita de autenticação para o banco de dados. Por isso, inicia-se o MongoDB da seguinte forma:
```
mongod --noauth --dbpath caminho/para/pasta/do/db
```
O caminho pode ser qualquer caminho já existente em sua máquina (exemplo: ~/Documents). Isto foi feito para não haver resquícios do banco de dados; Pois, após o teste ser realizado, basta deletar a pasta escolhida.

### Rodando a API

Após o MongoDB estar funcionando:

```
# Obrigatório para instalar os pacotes necessários
npm install

node server.js
```

### Notas

O backend possui a validação dos dados (os 5 atributos entre 1 a 10)
Possui rotas para remover/editar/buscar/ler
