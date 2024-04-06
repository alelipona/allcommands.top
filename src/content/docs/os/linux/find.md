---
title: What is find Linux command?
description: Discover how the Linux find command can help you search for files and directories efficiently on your system.
---

The find command in Linux is a powerful tool used to search for files and directories based on specific criteria. It allows users to locate files by name, size, type, or even modified time, making it a versatile solution for managing files effectively.

## find Syntax:
```bash
find [path] [options] [search criteria]
```

## Options:
| Option         | Description                                 |
|----------------|---------------------------------------------|
| -name \<file>  | Search for files with the specified name    |
| -type \<type>  | Search for files of a specific type         |
| -size \<size>  | Search for files of a specific size         |
| -user \<user>  | Search for files owned by a specific user   |
| -exec \<cmd>   | Execute a command on found files           |
| -delete        | Delete found files                          |
| -empty         | Search for empty files or directories       |

:::caution
Exercise caution when using the find command as it searches the file system recursively and can potentially affect a large number of files if not used correctly.
:::

## Parameters:
| Parameter       | Description                           |
|-----------------|---------------------------------------|
| path            | The starting point for the search     |
| options         | Various options to modify the search  |
| search criteria | Criteria to match for the search      |
## find Command Usage Examples:
### Find Files by Name
```bash
find /path/to/directory -name "file.txt"
```
Searches for files named "file.txt" within the specified directory.

### Find Files by Extension
```bash
find /path/to/directory -type f -name "*.pdf"
```
Locates all files with the ".pdf" extension in the specified directory.

### Find Empty Directories
```bash
find /path/to/directory -type d -empty
```
Identifies empty directories within the specified directory.

### Find Files Modified Within 7 Days
```bash
find /path/to/directory -type f -mtime -7
```
Lists files modified within the last 7 days in the specified directory.

### Find Large Files
```bash
find /path/to/directory -type f -size +1M
```
Locates files larger than 1 MB within the specified directory.
:::tip
When using the find command in Linux, it's important to carefully choose the options and parameters to specify the search criteria. This will help you efficiently locate files or directories based on various attributes. Additionally, combining find with other commands or utilities can expand its functionality and provide more advanced search capabilities.
:::

### How do I use find in Linux?
To use the find command in bash, execute the following command:
```bash
find /path/to/search -name "*.txt"
```

### What is the syntax for finding files by name in Linux?
The syntax for finding files by name in Linux using the find command is:
```bash
find /path/to/search -name "pattern"
```

### How can I search for files by extension using find in Linux?
To search for files by extension using find in Linux, you can use the following command:
```bash
find /path/to/search -name "*.pdf"
```

### How do I find directories in Linux using the find command?
To find directories in Linux using the find command, you can run the following command:
```bash
find /path/to/search -type d
```

### What is the command to find files based on size in Linux?
To find files based on size in Linux, you can use the find command with the -size option. Here's an example:
```bash
find /path/to/search -size +100M
```

### How can I search for files by modified date using find in Linux?
To search for files by modified date using find in Linux, you can use the following command:
```bash
find /path/to/search -mtime -7
```

### How do I combine multiple search criteria with find in Linux?
You can combine multiple search criteria with the find command in Linux using logical operators such as -and, -or, and -not. Here's an example:
```bash
find /path/to/search -name "*.txt" -and -size +1M
```

### How to exclude specific directories from a find search in Linux?
To exclude specific directories from a find search in Linux, you can use the -not -path option. For example:
```bash
find /path/to/search -not -path "/path/to/exclude*" -name "*.txt"
```
## Applications of the find command

- Searching for files and directories in a specific directory
- Finding files based on specific criteria such as name, size, permissions, etc.
- Executing a command on the files found by the find command
- Finding and deleting files based on certain conditions
- Listing the permissions of files and directories
- Locating files based on modification time
- Finding and archiving files
- Discovering and counting the number of files and directories
- Searching for symbolic links in a directory and its subdirectories