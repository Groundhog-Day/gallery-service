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
  title VARCHAR(64) NOT NULL,
  imageId INTEGER,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.images;

CREATE TABLE public.images (
  id SERIAL,
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
-- -- ---

-- INSERT INTO public.listings (title) VALUES ('City house');
-- INSERT INTO public.listings (title) VALUES ('Townhouse');
-- INSERT INTO public.listings (title) VALUES ('Park');
-- INSERT INTO public.listings (title) VALUES ('Grass');
-- INSERT INTO public.listings (title) VALUES ('Apartment');

-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('1','wwwwwwwwwwwwwwwww.jpg','bed.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('1','aaaaaaaaaaaaaaaaa.jpg','kitchen.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('1','ooooooooooooooooo.jpg','spacious bathroom.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('1','qpoweirupqowiuerr.jpg','nice balcony.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('1','qkjhwrelkqwjhrlkq.jpg','walk-in closet.');

-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('2','qkjhwrelkqwjhrlkq.jpg','bedroom.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('2','qkjhwrelkqwjhrlkq.jpg','kitchen.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('2','qkjhwrelkqwjhrlkq.jpg','wine cellar.');
-- INSERT INTO public.images (imageSet,imgUrl,imgDesc) VALUES ('2','qkjhwrelkqwjhrlkq.jpg','home cinema.');
