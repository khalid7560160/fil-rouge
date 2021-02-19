DROP DATABASE IF EXISTS `evaluation`;
CREATE DATABASE `evaluation`; 
USE `evaluation`;

CREATE TABLE `Client`(
`cli_num` int NOT NULL PRIMARY KEY,
`cli_nom` varchar(50) NOT NULL ,
`cli_adresse` varchar(50) NOT NULL ,
`cli_tel` varchar(30) NOT NULL
);


CREATE TABLE `Commande`(
`com_num` int NOT NULL PRIMARY KEY, 
`cli_num` int NOT NULL , 
`com_date` DATETIME ,
`com_obs` varchar (50) NOT NULL,
FOREIGN KEY (`cli_num`) REFERENCES `client`(`cli_num`)
);

CREATE TABLE `Produit`(
`pro_num` int NOT NULL PRIMARY KEY,
`pro_libelle` varchar (50) NOT NULL ,
`pro_description` varchar (50) NOT NULL
);

CREATE TABLE `est_compose`(
`com_num` int NOT NULL ,
`pro_num` int NOT NULL ,
`est_qte` int NOT NULL ,
PRIMARY KEY(com_num,pro_num) ,
FOREIGN KEY (`com_num`) REFERENCES `Commande`(`com_num`),
FOREIGN KEY (`pro_num`) REFERENCES `Produit`(`pro_num`)
);




CREATE INDEX index1 ON `Client`(cli_num);
SHOW INDEX FROM `Client`