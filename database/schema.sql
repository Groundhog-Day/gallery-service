/*
 * Execute this file from the terminal:
 * `psql -d postgres -U root < schema.sql`
 *
 */

DROP DATABASE IF EXISTS airbnb;

CREATE DATABASE airbnb;

\c airbnb;

DROP TABLE IF EXISTS public.listings;

CREATE TABLE public.listings (
  id SERIAL,
  title VARCHAR(256) NOT NULL,
  imgId INTEGER,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.images;

CREATE TABLE public.images (
  id SERIAL,
  imgSet INTEGER NOT NULL,
  imgUrl VARCHAR(256) NOT NULL,
  imgDesc VARCHAR(256) NULL,
  PRIMARY KEY (id)
);