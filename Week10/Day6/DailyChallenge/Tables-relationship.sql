-- Database: Tables-Relationship

-- DROP DATABASE IF EXISTS "Tables-Relationship";
-- 
-- CREATE DATABASE "Tables-Relationship"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- CREATE TABLE Customer (
--   id SERIAL PRIMARY KEY,
--   first_name VARCHAR(50) NOT NULL,
--   last_name VARCHAR(50) NOT NULL
-- );


-- CREATE TABLE Customer_profile (
--     id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT false,
--     customer_id INTEGER UNIQUE REFERENCES Customer(id)
-- );

-- INSERT INTO Customer (first_name, last_name)
-- VALUES ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- INSERT INTO Customer_profile (isLoggedIn, customer_id)
-- VALUES (
--   (SELECT true FROM Customer WHERE first_name = 'John'),
--   (SELECT false FROM Customer WHERE first_name = 'Jerome')
-- )

-- SELECT c.first_name
-- FROM Customer c
-- INNER JOIN Customer_profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- SELECT c.first_name, cp.isLoggedIn
-- FROM Customer c
-- LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- SELECT COUNT(*)
-- FROM Customer c
-- LEFT JOIN Customer_profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn IS NULL OR cp.isLoggedIn = false;

-- CREATE TABLE Book (
--   book_id SERIAL PRIMARY KEY,
--   title VARCHAR(100) NOT NULL,
--   author VARCHAR(100) NOT NULL
	
-- INSERT INTO Book (title, author)
-- VALUES ('Alice In Wonderland', 'Lewis Carroll'),
--        ('Harry Potter', 'J.K. Rowling'),
--        ('To Kill a Mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
--   student_id SERIAL PRIMARY KEY,
--   name VARCHAR(100) NOT NULL UNIQUE,
--   age INTEGER CHECK (age <= 15)
-- );


-- INSERT INTO Student (name, age)
-- VALUES ('John', 12),
--        ('Lera', 11),
--        ('Patrick', 10),
--        ('Bob', 14);


-- CREATE TABLE Library (
-- book_fk_id INTEGER REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- student_fk_id INTEGER REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
-- borrowed_date DATE,
-- PRIMARY KEY (book_fk_id, student_fk_id)
-- );


-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--         (SELECT student_id FROM Student WHERE name = 'John'),
--         DATE '2022-02-15')


-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
--         (SELECT student_id FROM Student WHERE name = 'Bob'),
--          DATE '2021-03-03');


-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--         (SELECT student_id FROM Student WHERE name = 'Lera'),
--        DATE '2021-05-23');

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
--  VALUES ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--         (SELECT student_id FROM Student WHERE name = 'Bob'),
--         DATE '2021-08-12');

-- SELECT * FROM Library;

SELECT s.name, b.title
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON b.book_id = l.book_fk_id;

SELECT AVG(s.age) AS average_age
FROM Student s
JOIN Library l ON s.student_id = l.student_fk_id
JOIN Book b ON b.book_id = l.book_fk_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student WHERE name = 'John';




