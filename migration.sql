DROP DATABASE IF EXISTS WorldCup;

CREATE DATABASE WorldCup;

CREATE TABLE WorldCup.group (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(30) NOT NULL
) ENGINE=INNODB;

CREATE TABLE WorldCup.country (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(30) NOT NULL,
  group_id INT NOT NULL,
   FOREIGN KEY (group_id)
    REFERENCES WorldCup.group (id)
) ENGINE=INNODB;

CREATE TABLE WorldCup.phases (
  id INT NOT NULL PRIMARY KEY auto_increment,
  phase VARCHAR(30) NOT NULL
) ENGINE=INNODB;

CREATE TABLE WorldCup.players (
  id INT NOT NULL PRIMARY KEY auto_increment,
  name VARCHAR(30) NOT NULL,
  country_id INT NOT NULL,
   FOREIGN KEY (country_id)
    REFERENCES WorldCup.country (id)
) ENGINE=INNODB;

CREATE TABLE WorldCup.matches (
  id INT NOT NULL PRIMARY KEY auto_increment,
  country_id_1 INT NOT NULL,
  country_id_2 INT NOT NULL,
  phase_id INT NOT NULL,
  date DATETIME,
   FOREIGN KEY (country_id_1)
    REFERENCES WorldCup.country (id),
   FOREIGN KEY (country_id_2)
    REFERENCES WorldCup.country (id),
   FOREIGN KEY (phase_id)
    REFERENCES WorldCup.phases (id)
) ENGINE=INNODB;

CREATE TABLE WorldCup.classification (
  country_id INT NOT NULL PRIMARY KEY,
  group_phase INT NOT NULL,
  round_of_16 INT NOT NULL,
  round_of_8 INT NOT NULL,
  semi_final INT NOT NULL,
  final INT NOT NULL,
  FOREIGN KEY (country_id)
    REFERENCES WorldCup.country (id)
)
