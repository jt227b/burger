-- Drops Database
DROP DATABASE IF EXISTS burgers_db;

-- Create burgers_db 
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create table
CREATE TABLE burgers (
   
    id INT NOT NULL AUTO_INCREMENT,
    
    burger_name VARCHAR(255) NOT NULL,
   
    devoured BOOL DEFAULT false,
    
    PRIMARY KEY (id)
);