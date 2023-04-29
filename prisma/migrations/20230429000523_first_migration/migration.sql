-- CreateTable
CREATE TABLE "category"
(
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" VARCHAR NOT NULL,
  "icon" VARCHAR,
  "color" VARCHAR,
  "permanent" BOOLEAN DEFAULT false,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salary"
(
  "value" INTEGER NOT NULL,
  "payment_date" TIMESTAMP(6) NOT NULL,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "userId" UUID,
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),

  CONSTRAINT "salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_tokens"
(
  "id" SERIAL NOT NULL,
  "token" UUID NOT NULL DEFAULT gen_random_uuid(),
  "user_id" VARCHAR NOT NULL,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "user_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"
(
  "name" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "password" VARCHAR NOT NULL,
  "roleId" UUID,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),

  CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "expenses"
(
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" VARCHAR NOT NULL,
  "value" DOUBLE PRECISION NOT NULL,
  "categoryId" UUID,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role"
(
  "id" UUID NOT NULL DEFAULT gen_random_uuid(),
  "name" VARCHAR NOT NULL,
  "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "salary" ADD CONSTRAINT "salary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "expenses" ADD CONSTRAINT "expenses_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- Insert Default Categories
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Viagem', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Educação', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Transporte', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Streams', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Comidas & Bebidas', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Tecnologia', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Esportes', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Música', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Entretenimento', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Finanças', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Moda', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Arte', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Cinema', 'null', 'null', 'true');
INSERT INTO "category"
  (
  name,
  icon,
  color,
  permanent)
VALUES
  ('Negócios', 'null', 'null', 'true');

-- Insert Default Roles
INSERT INTO "role"
  (name)
VALUES
  ('USER');
INSERT INTO "role"
  (name)
VALUES
  ('PLUS');
INSERT INTO "role"
  (name)
VALUES
  ('PREMIUM');
INSERT INTO "role"
  (name)
VALUES
  ('ADMIN');
