DROP DATABASE IF EXISTS WorldCup;

CREATE DATABASE WorldCup;

USE WorldCup;

CREATE TABLE group (
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE country (
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  group_id INT NOT NULL,
  PRIMARY KEY(id)
   FOREIGN KEY (group_id)
    REFERENCES group (id)
) ENGINE=INNODB;

CREATE TABLE phases (
  id INT NOT NULL auto_increment,
  phase VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE players (
  id INT NOT NULL auto_increment,
  name VARCHAR(30) NOT NULL,
  country_id INT NOT NULL,
  PRIMARY KEY(id)
   FOREIGN KEY (country_id)
    REFERENCES country (id)
) ENGINE=INNODB;

CREATE TABLE matches (
  id INT NOT NULL auto_increment,
  country_id_1 INT NOT NULL,
  country_id_2 INT NOT NULL,
  phase_id INT NOT NULL,
  date DATETIME DEFAULT,
  PRIMARY KEY(id)
   FOREIGN KEY (country_id_1)
    REFERENCES country (id)
   FOREIGN KEY (country_id_2)
    REFERENCES country (id)
   FOREIGN KEY (phase_id)
    REFERENCES phases (id)
) ENGINE=INNODB;

CREATE TABLE classification {
  id INT NOT NULL auto_increment,
  country_id INT NOT NULL,
  group_phase INT NOT NULL,
  round_of_16 INT NOT NULL,
  round_of_8 INT NOT NULL,
  semi_final INT NOT NULL,
  final INT NOT NULL,
  PRIMARY KEY(id)
  FOREIGN KEY (country_id)
    REFERENCES country (id)
}

SET SQL_SAFE_UPDATES = 0;