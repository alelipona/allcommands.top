---
title: MacOS find command
description: The MacOS find command is a powerful tool for searching for files and directories on your Mac computer. Learn how to use this command efficiently to locate specific items on your system.
---

The MacOS find command is a versatile tool for locating files and directories on your Mac computer. It allows you to search your system based on various criteria such as file name, size, and modification date. By using different options and flags, you can narrow down your search results and find exactly what you are looking for. The find command is useful for managing your files, organizing your data, and troubleshooting issues on your Mac. Mastering this command can help you become more efficient in navigating your file system and locating important files with ease.

## find Syntax:
```bash
find [path] [expression]
```
## Options:

| Option | Description                               |
|--------|-------------------------------------------|
| -H     | Follows symbolic links on the command line|
| -L     | Follows symbolic links when checking directories  |
| -P     | Does not follow symbolic links              |
| -E     | Uses extended regular expressions in the expression |

## Parameters:

| Parameter | Description                         |
|-----------|-------------------------------------|
| path      | Starting directory for the search    |
| expression| Defines the search criteria          |

:::caution
Exercise caution when using the find command, as it can recursively search through directories and generate a large amount of output. Make sure to specify the path and expression carefully to avoid unintended consequences.
:::
### Search for a File by Name
```bash
find . -name "example.txt"
```
Searches the current directory and all subdirectories for a file named "example.txt".

### Find Files Modified in the Last 7 days
```bash
find . -type f -mtime -7
```
Locates all files in the current directory modified within the last 7 days.

### Search for Directories Only
```bash
find . -type d
```
Finds all directories in the current directory and subdirectories.

### Exclude Files with a Specific Extension
```bash
find . -type f ! -name "*.log"
```
Searches for files in the current directory and subdirectories but excludes files with the extension ".log".
:::tip
When using the find command in MacOS, keep in mind that it has many options and parameters that can be combined to search for files based on various criteria such as name, size, permissions, and more. Make sure to carefully read the documentation or use the man pages to fully understand the power of the find command.
:::

### How do I use find in MacOS?
To use the find command in MacOS, execute the following command:
```bash
find --option <value>
```

### How can I find a file by name in MacOS?
To find a file by name in MacOS, you can use the following command:
```bash
find . -name "file_name"
```

### How do I search for files by extension in MacOS?
To search for files by extension in MacOS, you can use the following command:
```bash
find . -name "*.txt"
```

### How can I find files modified in the last X days in MacOS?
To find files modified in the last X days in MacOS, you can use the following command:
```bash
find . -mtime -X
```

### How do I search for empty files and directories in MacOS?
To search for empty files and directories in MacOS, you can use the following command:
```bash
find . -empty
```

### How can I search for files based on their size in MacOS?
To search for files based on their size in MacOS, you can use the following command:
```bash
find . -size +1M
```

### How do I execute a command on the files found by find in MacOS?
To execute a command on the files found by find in MacOS, you can use the following command:
```bash
find . -name "file_name" -exec command {} \;
```

## Applications of the find command

- Searching for files and directories
- Finding files based on different criteria such as name, size, type, and modified time
- Executing actions on the files found, such as deleting, moving, or copying
- Searching for files within a specific directory or a directory tree
- Locating specific files or directories on the Mac filesystem