CREATE DATABASE Datta;

CREATE DATABASE xyz;

drop database xyz;

use datta;

CREATE TABLE user (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
CONSTRAINT CHECK (age >= 13)
);

SELECT * FROM user;

use datta;

insert into user
(id, age, name, email)
values
(1, 21 ,"da", "rahegaonakardatta@gmail.com"),
(2, 20, "ram","ramshinde@gmail.com");

insert into books
(id, name)
values
(1,"datta"),
(2,"atharv"),
(4,"sahil");

select * from books;

CREATE DATABASE xyz;