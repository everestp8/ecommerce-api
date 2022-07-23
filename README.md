# E-Commerce API
Uma API para catálogo de loja virtual em Typescript que permite listagem e upload de produtos juntamente com suas imagens.

## Objetivos com o projeto
1. Me aprofundar no uso de ferramentas como o Typescript e o Prisma ORM além de testes automatizados com o Jest.
2. Reaproveitar parte do projeto para desenvolver meu trabalho prático de conclusão de curso na Microcamp.

## Instalação 
1. Crie um arquivo `.env` na raiz do projeto com as seguintes definições:
``` .env
PORT="Porta da API (default: 3000)"
DATABASE_URL="Caminho do banco Sqlite(default: file:./database/dev.db)"
```

2. Instale as dependencias com o npm:
``` bash
npm i
```

3. Rode as migrations do banco com o Prisma:
``` bash
npx prisma migrate dev
```

4. Rode o projeto em desenvolvimento com:
``` bash
npm run dev
```

## Features
- [x] Iniciar a aplicação
- [x] Criar um middleware para lidar com erros
- [x] Conectar ao banco de dados
- [ ] Relacionar a tabela de Produtos com a de Imagens

### Produtos
- [x] Criar a tabela no banco
- [x] Criar rotas, controllers e services base
- [ ] Criar testes
- [x] Permitir a criação de produtos
- [x] Permitir a remoçâo de produtos
- [ ] Permitir o retorno de um produto específico
- [x] Permitir o retorno de todos os produtos
- [ ] Permitir a edição de um produto

### Imagens
- [ ] Criar a tabela no banco
- [ ] Criar rotas, controllers e services base
- [ ] Criar testes
- [ ] Permitir o envio de imagens anexadas a um produto
- [ ] Permitir a remoçâo de imagens
- [ ] Permitir o retorno de uma imagem específica um produto
- [ ] Permitir o retorno de todas as imagens de um produto