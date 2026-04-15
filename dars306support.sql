CREATE DATABASE dars306support;

CREATE TABLE student
(
    id   SERIAL PRIMARY KEY,
    name VARCHAR(28)
);

INSERT INTO student (name)
VALUES ('Yusuf'),
       ('Ali'),
       ('Aisha'),
       ('Sadiya'),
       ('Umar');


CREATE TABLE grade(
    id SERIAL PRIMARY KEY ,
    student_id INT NOT NULL ,
    score INT
);

DROP TABLE grade;

INSERT INTO grade (student_id, score)
VALUES ( 1, 5),
       (3, 3),
       (5, 4),
       (4, 5);

SELECT s.name, g.score
FROM student s
INNER JOIN grade g on s.id = g.student_id;


SELECT s.name, g.score
FROM student s
         LEFT JOIN grade g on s.id = g.student_id;

SELECT s.name
FROM student s
LEFT JOIN grade g on s.id = g.student_id
WHERE g.id IS NULL;

SELECT s.name, g.score
FROM student s
FULL OUTER JOIN grade g on s.id = g.student_id;

SELECT s.name, g.score
FROM student s
         FULL OUTER JOIN grade g on s.id = g.student_id
WHERE s.id IS NULL OR g.student_id IS NULL;