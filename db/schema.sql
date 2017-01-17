CREATE database healthFewdDB;

USE healthFewdDB;

CREATE TABLE options (
  id int NOT NULL AUTO_INCREMENT,
  foodname varchar(100) NOT NULL,
  devoured boolean NOT NULL default,
  date timestamp,
  PRIMARY KEY (id)
);


-- research NULL ??

-- date is auto something?? initialize??

-- make default value for devoured no
