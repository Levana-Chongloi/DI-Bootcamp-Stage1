-- Database: sql_puzzle

-- DROP DATABASE IF EXISTS sql_puzzle;

-- CREATE DATABASE sql_puzzle
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1252'
--     LC_CTYPE = 'English_Israel.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab

--  CREATE TABLE SecondTab (
--  id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);

--  SELECT * FROM SecondTab;
 
 

--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL ); --output is 0
	

--  SELECT COUNT(*) 
--     FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ); -- output is 4

 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ); -- output is 0

SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ); -- output is 4
