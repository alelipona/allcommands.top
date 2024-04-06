---
title: ESENTUTL Windows Command Guide
description: Learn how to use the Windows esentutl command to manage Extensible Storage Engine databases efficiently.
---

The Windows esentutl command is a powerful tool for managing Extensible Storage Engine databases. It allows users to perform various operations such as database repair, defragmentation, and database maintenance. By using esentutl, users can ensure the health and integrity of their ESE databases, leading to improved performance and reliability. This guide provides an overview of the esentutl command and explores its various options and functionalities.
## ESENTUTL Syntax:
```cmd
esentutl [options] [parameter]
```

## Options:
| Option          | Description                               |
|-----------------|-------------------------------------------|
| /mh             | Display file header information            |
| /mk             | Generate a new map file                    |
| /ml             | Display or set logfile size                |
| /gp             | Display or set log path                    |
| /ru             | Recover an inconsistent database           |
| /sn             | Set the database page size                 |
| /p              | Specify the location of the database file  |
| /k              | Check the database for consistency         |

## Parameters:
| Parameter       | Description                               |
|-----------------|-------------------------------------------|
| database_file   | The path to the database file              |
| log_file        | The path to the log file                   |
| map_file        | The path to the map file                   |
| logfile_size    | Size in bytes for the log file             |
| page_size       | Size in bytes for the database page        |
| new_database    | Name of the new recovered database file    |

:::caution
Exercise caution when using the esentutl command as it directly interacts with the Extensible Storage Engine (ESE) databases on Windows systems. Incorrect usage may lead to data corruption or loss. Be sure to fully understand the implications of each command and its options before proceeding.
:::
## ESENTUTL Command Samples:
### Check the Integrity of a Database File
```cmd
esentutl /g "C:\Database\example.db"
```
Verifies the integrity of the specified database file.

### Defragment a Database
```cmd
esentutl /d "C:\Database\example.db"
```
Defragments the specified database file to optimize performance.

### Repair a Corrupted Database
```cmd
esentutl /p "C:\Database\example.db"
```
Attempts to repair a corrupted database file.

### Create a New Blank Database
```cmd
esentutl /y "C:\Database\new.db"
```
Creates a new, blank database file at the specified location.

### Restore a Database from a Backup
```cmd
esentutl /r "C:\Database\example.bak" /d "C:\Database\restored.db"
```
Restores a database from a backup file to the specified location.

### Check Database Integrity Without Recovery Logs
```cmd
esentutl /k "C:\Database\example.db" /o
```
Checks the integrity of a database file without applying recovery logs.

### Perform a Soft Recovery of a Database
```cmd
esentutl /r "C:\Database\example.db" /i
```
Performs a soft recovery of the specified database file.
:::tip
When using the esentutl command in Windows, make sure to run it with administrative privileges to avoid any issues with accessing or modifying the Windows Extensible Storage Engine (ESE) databases.
:::

## ESENTUTL FAQ:
### How do I use esentutl in Windows?
To use the esentutl command in Windows, execute the following command:
```cmd
esentutl --mh "C:\path\to\database.edb"
```

### What is the purpose of the esentutl command?
The esentutl command in Windows is used to perform various administrative operations on Extensible Storage Engine (ESE) databases, such as repair, recovery, and maintenance tasks.

### How can I check the integrity of an ESE database using esentutl?
To check the integrity of an ESE database with esentutl, use the following command:
```cmd
esentutl /g "C:\path\to\database.edb"
```

### Can I repair a corrupted ESE database with esentutl?
Yes, you can repair a corrupted ESE database using the esentutl command in Windows. To repair a database, run the following command:
```cmd
esentutl /p "C:\path\to\database.edb"
```

### How do I defragment an ESE database using esentutl?
To defragment an ESE database with esentutl, use the following command:
```cmd
esentutl /d "C:\path\to\database.edb"
```

### Is it possible to create a new blank ESE database using esentutl?
Yes, you can create a new blank ESE database with esentutl. Use the following command to create a new database:
```cmd
esentutl /c "C:\path\to\new-database.edb"
```
## Applications of the ESENTUTL Command

- Check database integrity
- Repair corrupted databases
- Defragment databases
- Manage database maintenance tasks
- Extract data from the database
- Perform database recovery operations