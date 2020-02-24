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
  list_id SERIAL,
  title VARCHAR(256) NOT NULL,
  PRIMARY KEY (list_id)
);

DROP TABLE IF EXISTS public.images;

CREATE TABLE public.images (
  img_id SERIAL,
  list_id INTEGER,
  img_url VARCHAR(256) NOT NULL,
  img_desc VARCHAR(256) NULL,
  PRIMARY KEY (img_id)
);

-- SELECT listings.list_id, listings.title, images.img_url, images.img_desc
-- FROM listings
-- INNER JOIN images
-- ON listings.list_id = images.list_id
-- WHERE listings.list_id = 1;

-- CREATE INDEX idx_images_list_id ON images(list_id);