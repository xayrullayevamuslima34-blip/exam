/*postgresql*/
CREATE DATABASE dars306;

CREATE TABLE groups
(
    id    SERIAL PRIMARY KEY,
    title VARCHAR(128)
);

DROP TABLE groups;

CREATE TABLE groups
(
    id    SERIAL PRIMARY KEY,
    title VARCHAR(128)
);

ALTER TABLE groups
    ALTER COLUMN title SET NOT NULL;

ALTER TABLE groups
    ALTER COLUMN title DROP NOT NULL;

ALTER TABLE groups
    ALTER COLUMN title SET NOT NULL;

ALTER TABLE groups
    RENAME TO guruhlar;

ALTER TABLE guruhlar
    RENAME TO groups;

ALTER TABLE groups
    RENAME title TO name;

ALTER TABLE groups
    ADD COLUMN created TIMESTAMP NOT NULL DEFAULT now();

ALTER TABLE groups
    ALTER COLUMN created TYPE TIMESTAMP WITH TIME ZONE;

INSERT INTO groups (name)
VALUES ('Bootcamp Full-Stack N28'),
       ('Web Practicum N5'),
       ('Web N12');

SET timezone = 'UTC';


SELECT id, name, created
FROM groups;

ALTER TABLE groups
    ALTER COLUMN created SET DEFAULT CURRENT_TIMESTAMP;

CREATE TABLE students
(
    id       INT GENERATED ALWAYS AS IDENTITY,
    fullname VARCHAR(32) NOT NULL,
    gender   VARCHAR(6)  NOT NULL CHECK (gender IN ('male', 'female'))
);

INSERT INTO students (fullname, gender)
VALUES ('Sherozbek', 'male'),
       ('Asilbel', 'male'),
       ('Humoyun', 'male'),
       ('Muslima', 'female'),
       ('Sevinch', 'female'),
       ('Behruz', 'male'),
       ('Davron', 'male'),
       ('Bilol', 'male'),
       ('Sardor', 'male'),
       ('Usmon', 'male'),
       ('Bilolxon', 'male');

ALTER TABLE students
    ADD COLUMN groupid INT NULL;

ALTER TABLE students
    ADD CONSTRAINT "students_to_group_fk" FOREIGN KEY (groupid) REFERENCES groups (id) ON DELETE SET NULL;

SELECT id, fullname
FROM students
ORDER BY id;

SELECT id, fullname
FROM students
ORDER BY fullname;

SELECT students.id, fullname, groups.name as "group"
FROM students
         INNER JOIN groups ON groups.id = students.groupid
ORDER BY id; /*birinchi jadvalni ikkinchisiga solishtirib FAQAT ikkala jadvalda ham mos keladiganlarni oladi*/

SELECT students.id, fullname, groups.name as "group"
FROM students
         RIGHT JOIN groups ON groups.id = students.groupid
ORDER BY id;/*o'ng tarafdagi jadvaldagi HAMMA qatorlarni oladi*/

SELECT students.id, fullname, groups.name as "group"
FROM students
         LEFT JOIN groups ON groups.id = students.groupid
ORDER BY id;  /*chap tarafdagi jadvaldagi HAMMA qatorlarni oladi''*/

SELECT students.id, fullname, groups.name as "group"
FROM students
         FULL JOIN groups ON groups.id = students.groupid
ORDER BY id; /*chap jadvaldagi HAMMA qatorlar + o'ng jadvaldagi HAMMA qatorlar*/

CREATE TABLE teachers
(
    id       SERIAL PRIMARY KEY ,
    fullname VARCHAR(32) NOT NULL,
    gender   VARCHAR(6)  NOT NULL CHECK (gender IN ('male', 'female'))
);

INSERT INTO teachers (fullname, gender)
VALUES ('SolihCoder', 'male'),
       ('Jahongir', 'male');

ALTER TABLE groups ADD COLUMN teacherid INT NOT NULL REFERENCES teachers (id) DEFAULT 1;

SELECT s.id, s.fullname as student, g.name as groups, t.fullname as teacher
FROM students s
         LEFT JOIN groups g ON g.id = s.groupid
         LEFT JOIN teachers t ON g.teacherid = t.id
ORDER BY s.fullname;


