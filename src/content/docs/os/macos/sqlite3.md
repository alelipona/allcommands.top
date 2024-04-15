---
title: sqlite3 MacOS command
description: Execute SQLite commands on MacOS using the sqlite3 command line utility.
---

SQLite is a command-line utility available on MacOS for interacting with SQLite databases. With sqlite3, users can create, query, and modify databases seamlessly. This powerful tool supports various SQL commands, making it versatile for database management tasks. SQLite is lightweight, fast, and easy to use, making it a popular choice for developers working on MacOS systems. The sqlite3 command line utility on MacOS provides a user-friendly interface for managing SQLite databases efficiently.

## sqlite3 Syntax:
```bash
sqlite3 [database_file]
```
## sqlite3 Options:

| Option | Description                               |
|--------|-------------------------------------------|
|   -init filename | Specify a file with SQL commands to initialize the database        |
|   -html        | Show query results in HTML format        |
|   -line        | Show query results in column-aligned format        |
|   -list        | Show query results in list format        |
|   -separator string | Change the column separator for the list output format        |
|   -column-names | Show column names in the list output format        |
|   -echo        | Display SQL commands before execution        |
|   -header      | Display the column names in query output        |
|   -nullvalue string | Change the string displayed for NULL values        |
|   -bail        | Stop after hitting an error        |
|   -help        | Show help for sqlite3 command-line options        |

## Parameters:
| Parameter    | Description                             |
|--------------|-----------------------------------------|
| database_file | The SQLite database file to work with   |

## sqlite3 Command Usage Examples:
### Connect to a Database File
```bash
sqlite3 test.db
```
This command connects to the "test.db" database file for further operations.

### Display the SQLite3 Version
```bash
sqlite3 --version
```
Displays the version of SQLite3 that is currently installed on the system.

### Show Available Tables in the Database
```bash
sqlite3 test.db .tables
```
Lists all the tables available in the "test.db" database.

### Execute SQL Query on a Database
```bash
sqlite3 test.db "SELECT * FROM employees;"
```
Executes the SQL query that selects all records from the "employees" table in the "test.db" database.

### Exit SQLite3
```bash
sqlite3 test.db .exit
```
Exits the SQLite3 prompt and closes the connection to the "test.db" database.
:::tip
Always remember to backup your database before making any changes in sqlite3 to avoid accidental data loss.
:::

### How do I open a database with sqlite3 in MacOS?
To open a specific database file using sqlite3 in MacOS, use the following command:
```bash
sqlite3 database_file.db
```

### How do I list all tables in a database using sqlite3 in MacOS?
To list all tables in a database using sqlite3 in MacOS, run the following command after opening the database:
```bash
.tables
```

### How do I run SQL queries in sqlite3 in MacOS?
To execute SQL queries within sqlite3 in MacOS, you can use the following command syntax:
```bash
sqlite3 database_file.db "SELECT * FROM table_name;"
```

### How do I exit sqlite3 in MacOS?
To exit from the sqlite3 command prompt in MacOS, type the following command:
```bash
.exit
```

### How do I import data from a CSV file into a table in sqlite3 on MacOS?
You can import data from a CSV file into a table in sqlite3 on MacOS by using the following command:
```bash
sqlite3 -separator ',' -cmd ".import file.csv table_name" database_file.db
```

### How do I create a new table in a database using sqlite3 in MacOS?
To create a new table in a database with sqlite3 on MacOS, use the following syntax:
```bash
sqlite3 database_file.db "CREATE TABLE table_name (column1 INTEGER, column2 TEXT);"
```

### How do I display the schema of a table in sqlite3 on MacOS?
You can view the schema of a table in sqlite3 on MacOS by running the following command:
```bash
sqlite3 database_file.db "PRAGMA table_info(table_name);"
```

### How do I perform a backup of a SQLite database in MacOS with sqlite3?
To create a backup of a SQLite database in MacOS using sqlite3, you can run the following command:
```bash
sqlite3 database_file.db ".backup backup_file.db"
```
## Applications of the sqlite3 MacOS Command

- Create or open a SQLite database
- Perform various operations on a SQLite database such as querying, inserting, updating, and deleting data
- Execute SQL commands and statements 
- Import and export data from/to a SQLite database
- Perform transactions within a SQLite database
- Manage database schema and structure