CREATE TABLE people (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  primary key (id)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;

INSERT INTO people (`name`) VALUES('João');
INSERT INTO people (`name`) VALUES('Pedro');
INSERT INTO people (`name`) VALUES('Maria');
