DROP DATABASE IF EXISTS aircarousel;

CREATE DATABASE aircarousel;

USE aircarousel;

CREATE TABLE images (
id INT NOT NULL AUTO_INCREMENT,
image VARCHAR(256),
accommodationId INT,
PRIMARY KEY (id)
);

CREATE TABLE accommodations (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(64),
PRIMARY KEY (id)
);
