/*
 * Execute this file from the terminal:
 * `psql -d postgres -U root < schema.sql`
 *
 */

DROP DATABASE IF EXISTS testbnb;

CREATE DATABASE testbnb;

\c testbnb;

DROP TABLE IF EXISTS public.listings;

CREATE TABLE public.listings (
  id BIGSERIAL,
  title VARCHAR(64) NOT NULL,
  imageId INTEGER NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.images;

CREATE TABLE public.images (
  id BIGSERIAL,
  imageSet INTEGER NOT NULL,
  imgUrl VARCHAR(256) NOT NULL,
  imgDesc VARCHAR(256) NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE listings ADD FOREIGN KEY (imageId) REFERENCES public.images (id);

-- ---
-- Test Data
-- ---

-- INSERT INTO `listings` (`id`,`title`,`imageId`) VALUES
-- ('','','');

-- INSERT INTO `images` (`id`,`sets`,`url`,`desc`) VALUES
-- ('','','','');