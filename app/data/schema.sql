CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS student;
CREATE TABLE student (
	id int PRIMARY KEY AUTO_INCREMENT ,
    username varchar(24) UNIQUE NOT NULL,
    name varchar(48)
);

INSERT INTO student (id, username, name) VALUES 
(1, 'tomgreg', 'Tom Gregory'),
(2, 'beth1', 'Beth Barnhart'),
(3, 'bipin', 'Prof. Prabhakar');

-- SELECT * FROM students;

DROP TABLE IF EXISTS offer;
CREATE TABLE offer (
	id int PRIMARY KEY AUTO_INCREMENT,
    studentId int NOT NULL REFERENCES student(id) 
        ON DELETE CASCADE ON UPDATE CASCADE,
	companyName VARCHAR(24) NOT NULL DEFAULT '',
    salary int NOT NULL DEFAULT 0,
    bonus int NOT NULL DEFAULT 0,
	offerDate date NOT NULL DEFAULT(CURRENT_DATE)
);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO offer(id, studentId, companyName, salary, bonus, offerDate) VALUES
  (1, 2, 'KPMG', 95000, 7000, '2021-09-30'),
  (2, 2, 'Deloitte Digital', 94000, 12000, '2021-10-03'),
  (3, 2, 'IU, ISGP', 54000, 0, '2021-10-05'),
  (4, 3, 'Amazon', 122000, 11000, '2021-10-15')
;






-- SELECT * FROM students;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	title VARCHAR(24) NOT NULL DEFAULT '',
    author VARCHAR(20) NOT NULL DEFAULT '',
    
    yearpublished  date NOT NULL DEFAULT(CURRENT_DATE),
    publisher VARCHAR(20) NOT NULL DEFAULT '',
    pagecount int NOT NULL DEFAULT 0,
	msrp int NOT NULL DEFAULT 0

);

-- Student 1 has no offers, Student 2 has 3 offers, Student 3 has one offer
INSERT INTO book (title, author, yearpublished, publisher, pagecount, msrp) VALUES
  ("aaa", "mark", 2004, "Gudbooks", 4, 99),
  ("bbb", "jacob", 2003, "expenzive books", 5, 999),
  ("ccc", "larry", 2002, "cheapbooks", 6, 8),
  ("ddd", "hairy", 2001, "cheapbooks", 7, 15),
("eee", "harry", 2000, "gudbooks", 40, 30),
("fff", "mary", 1999, "gudbooks", 10, 40)
;
-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';

-- COMMIT;

-- CREATE USER 'msisreader'@'%' IDENTIFIED BY 'msisreadonly';
-- GRANT SELECT ON * . * TO 'msisreader'@'%';