create database catalog;
\c catalog;


CREATE TABLE "public"."books" (
    "id" uuid NOT NULL,
    "data" jsonb NOT NULL,
    CONSTRAINT "books_id" PRIMARY KEY ("id")
) WITH (oids = false);