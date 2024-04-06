---
title: Windows WHERE command
description: Find files and directories in Windows quickly with the WHERE command.
---

The WHERE command in Windows is a powerful tool used to search for files and directories within the system. It allows users to quickly locate the location of a specific file or folder by specifying search criteria such as file name, extension, or location. This command provides a convenient way to find files without having to manually search through directories. Additionally, it can also be used to search for executable files within the system path. The WHERE command in Windows is a valuable tool for efficient file management and organization.
## WHERE Syntax:
```cmd
where [/r dir] [/q] [/f] [/t] command...
```
## Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| /r     | Recursively searches for the command in the specified directory and its subdirectories. |
| /q     | Quiet mode; does not display the headers.         |
| /f     | Displays the matched file in quotation marks.     |
| /t     | Performs the search with timeout.                 |

## Parameters:
| Parameter | Description                                                                          |
|-----------|--------------------------------------------------------------------------------------|
| command   | Specifies the command or program to search for.                                      |

## WHERE Usage:
### Find the Location of a Specific Program
```cmd
where notepad
```
Searches and displays the location of the program “notepad”.

### Search for a File Using Wildcard
```cmd
where *.txt
```
Locates and lists all files with the “.txt” extension in the current directory.

### Locate Multiple Programs
```cmd
where notepad calc
```
Finds and shows the locations of both “notepad” and “calc” programs on the system.

### Search for a Program in a Specified Path
```cmd
where /R "C:\Windows\System32" calc.exe
```
Recursively searches for the program “calc.exe” in the specified directory “C:\Windows\System32”.
:::tip
Remember to use the appropriate options with the where command to refine your search and find the desired file or program efficiently.
:::

### How do I use where in Windows?
To use the where command in Windows, execute the following command:
```cmd
where filename
```

### What is the purpose of the where command in Windows?
The where command in Windows is used to locate and display the path of a file or program within the system.
```cmd
where notepad.exe
```

### How can I search for a file with a specific extension using the where command?
To search for a file with a specific extension using the where command, use the following syntax:
```cmd
where *.txt
```

### Can I use wildcards with the where command in Windows?
Yes, you can use wildcards to search for files or programs with partial names using the where command.
```cmd
where myprog*
```

### How do I search for a file in specific directories using the where command?
To search for a file in specific directories using the where command, specify the directory paths along with the file name.
```cmd
where /R C:\Windows notepad.exe
```

### Is it possible to search for executables in the system PATH with the where command?
Yes, you can search for executables that are within the system PATH using the where command.
```cmd
where /R %PATH% filename
```

### How can I list all directories in the system PATH using the where command?
To list all directories in the system PATH using the where command, you can use the following command:
```cmd
where /T
```

## Applications of the WHERE Command

1. Locating the path of an executable file.
2. Finding the location of a specific command or program.
3. Checking for the existence of a program in the system's PATH.