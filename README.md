# Description

O GreenyTime é um aplicativo que tem como objetivo auxiliar no controle financeiro pessoal de forma simples e intuitiva. Com o GreenyTime, é possível adicionar suas receitas e despesas de forma organizada e visualizar suas finanças de maneira clara.

# Pré requisitos

- Node.js v14 ou superior
- Docker Desktop
- DBeaver (use o que preferir)

# Iniciando com o docker

```
docker run --name {nome do container} -e POSTGRES_PASSWORD={password do banco} -p 5432:5432 -d postgres
```

# Execute as migrations

1.

```
npm run prisma:generate
```

2.

```
npm run prisma:format
```

# Executar

Para rodar o app, use

```
npm run start
```
