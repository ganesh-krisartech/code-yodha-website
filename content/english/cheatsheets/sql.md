---
title: "Sql"
meta_title: ""
description: "**SQL cheatsheet**"
author: "CodeYodha"
draft: false
---
# SQL Cheatsheet - Essential Commands



---

## 🔍 DATA QUERYING (SELECT)

Retrieve all records
`SELECT * FROM table_name;`

Select specific columns
`SELECT column1, column2 FROM table_name;`

Select unique values
`SELECT DISTINCT column FROM table_name;`

Count rows
`SELECT COUNT(*) FROM table_name;`

Group and count
`SELECT column1, COUNT(*) FROM table_name GROUP BY column1;`

Filter rows
`SELECT column1 FROM table_name WHERE column2 = 'value';`

Filter rows within a range
`SELECT * FROM table_name WHERE column1 BETWEEN value1 AND value2;`

Sort in ascending order
`SELECT * FROM table_name ORDER BY column1 ASC;`

Sort in descending order
`SELECT * FROM table_name ORDER BY column1 DESC;`

Pagination (ANSI SQL:2008)
`SELECT * FROM table_name ORDER BY column1 FETCH FIRST 10 ROWS ONLY;`

---

## ✍️ DATA MANIPULATION (INSERT, UPDATE, DELETE)

Insert a new row
`INSERT INTO table_name (column1, column2) VALUES (value1, value2);`

Update existing data
`UPDATE table_name SET column1 = value1 WHERE condition;`

Delete records
`DELETE FROM table_name WHERE condition;`

---

## 🏗️ DATA DEFINITION (CREATE, ALTER, DROP)

Create a new table
`CREATE TABLE table_name ( column1 datatype PRIMARY KEY, column2 datatype NOT NULL, column3 datatype DEFAULT default_value );`

Add a column to a table
`ALTER TABLE table_name ADD column_name datatype;`

Drop a column from a table
`ALTER TABLE table_name DROP COLUMN column_name;`

Delete a table
`DROP TABLE table_name;`

---

## 🔗 JOINS & RELATIONSHIPS

Inner join
`SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.fk_id;`

Left join
`SELECT * FROM table1 LEFT OUTER JOIN table2 ON table1.id = table2.fk_id;`

Right join
`SELECT * FROM table1 RIGHT OUTER JOIN table2 ON table1.id = table2.fk_id;`

Full outer join
`SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.id = table2.fk_id;`

---

## 🧩 SUBQUERIES & SET OPERATIONS

Subquery using IN
`SELECT column FROM table WHERE column IN (SELECT column FROM table WHERE condition);`

Union (remove duplicates)
`SELECT column FROM table1 UNION SELECT column FROM table2;`

Intersect
`SELECT column FROM table1 INTERSECT SELECT column FROM table2;`

Except (difference)
`SELECT column FROM table1 EXCEPT SELECT column FROM table2;`

---

## 📚 INDEXES, VIEWS & TRANSACTIONS

Create an index
`CREATE INDEX index_name ON table_name (column);`

Create a view
`CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;`

Start a transaction
`BEGIN TRANSACTION;`

Update inside a transaction
`UPDATE table_name SET column = value WHERE condition;`

Commit a transaction
`COMMIT;`

Rollback a transaction
`ROLLBACK;`

---

## 🛠️ USEFUL FUNCTIONS & CLAUSES

Get current date and time
`SELECT CURRENT_TIMESTAMP;`

Convert column to upper and lower case
`SELECT UPPER(column), LOWER(column) FROM table_name;`

Get character length of a column
`SELECT CHARACTER_LENGTH(column) FROM table_name;`

Replace NULL with default value
`SELECT COALESCE(column, 'default') FROM table_name;`

Conditional logic
`SELECT CASE WHEN condition THEN result ELSE alternative END FROM table_name;`

---




---
[⬇️ Download the Git Cheatsheet PDF](/downloads/sql_cheatsheet.pdf)
