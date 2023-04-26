## Docker:

docker run --name greenytime_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

## TypeOrm:

### Para gerar a migration use

npm run prisma:generate

### Para formatar o arquivo do primsa use

npm run prisma:format
