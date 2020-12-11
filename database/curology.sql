DROP DATABASE IF EXISTS curology;
CREATE DATABASE curology;

\c curology;

CREATE TABLE IF NOT EXISTS customers (
  customer_id             serial PRIMARY KEY,
  first_name     varchar NOT NULL,
  last_name      varchar NOT NULL,
  email          varchar NOT NULL,
  phone         varchar NOT NULL,
  street1       varchar NOT NULL,
  street2       varchar,
  city          varchar NOT NULL,
  states        varchar NOT NULL,
  zip           varchar NOT NULL,
  ccNum         varchar NOT NULL,
  expiration    varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
  id            serial PRIMARY KEY,
  customer_ref  int REFERENCES customers(customer_id),
  total         varchar(10) NOT NULL,
  quantity      int NOT NULL,
  orderDate     TIMESTAMP default now(),
  fulfilled      boolean
);



/*
command to run file ====> psql postgres < database/curology.sql
*/