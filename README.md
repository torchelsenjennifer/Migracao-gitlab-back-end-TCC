## Descrição

Este é um projeto Node.js que utiliza Express para o servidor web e Sequelize para ORM. O projeto está configurado para usar bcrypt para hashing de senhas, cors para habilitar CORS, e dotenv para variáveis de ambiente.

## Pré-requisitos

Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório:
    ```sh
    git clone git@github.com:jessicagasque/pd1_backend.git
    
    cd pd1
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente:
    ```plaintext
    DB_HOST= localhost
    DB_USER= root
    DB_PASS= sua_senha
    DB_NAME= wisedb
    ```

2. Certifique-se de que seu banco de dados esteja configurado e rodando.

## Uso

Para iniciar o servidor em modo de desenvolvimento, use:
```sh
npm run dev

O servidor será iniciado em http://localhost:3000
````

### Scripts

npm start: Inicia o servidor.
npm run dev: Inicia o servidor com nodemon para recarregar automaticamente quando arquivos forem modificados.
npm test: Mostra uma mensagem de erro pois nenhum teste está configurado.

### Dependências
    
    bcrypt: ^5.1.1
    cors: ^2.8.5
    dotenv: ^16.4.5
    express: ^4.19.2
    mysql: ^2.18.1
    node: ^20.15.0
    sequelize: ^6.37.3

### Dependências de Desenvolvimento

    nodemon: ^2.0.21
  

    

### Autor

jessicagasque

### Licença

ISC
