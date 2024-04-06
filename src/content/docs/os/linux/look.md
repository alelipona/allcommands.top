---
title: look Linux Command Guide
description: Learn how to use the Linux look command to search for lines in a sorted file that begin with a specific keyword.
---

The Linux look command is a helpful tool for finding lines in a sorted file that start with a specific keyword. By specifying a keyword, look will search for and display any lines that match the provided criteria. This command is useful for quickly locating relevant information in large files and can be combined with other commands for more complex searches. The look command is simple to use and can save you time when working with sorted files in Linux.
## look Syntax:
```bash
look [OPTION] STRING [FILE]
```
## Options:
| Option | Description                             |
|--------|-----------------------------------------|
| -b     | Ignore leading blanks                   |
| -f     | Fold lower case to upper case           |
| -t     | Stop after the first matching line      |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| STRING    | The string to search for in the file      |
| FILE      | The file to search for the specified string|


:::caution
Exercise caution while using the look command as it searches for the specified string in a sorted file and is case-sensitive by default. It may produce unexpected results if the file is not sorted in the expected order.
:::
## look Command Samples:
### Search for a Specific Word in a File
```bash
look "example" file.txt
```
Searches for the word "example" in the file "file.txt".

### Display Lines Matching a Prefix
```bash
look "prefix" file.txt
```
Displays lines in the file "file.txt" that start with the prefix "prefix".

### Case-Insensitive Search
```bash
look -f "example" file.txt
```
Performs a case-insensitive search for the word "example" in the file "file.txt".

### Display Lines Matching a Pattern
```bash
look "[0-9][0-9]*" file.txt
```
Displays lines in the file "file.txt" that match the pattern of one or more digits at the beginning.

### Display Multiple Words
```bash
look -b "first" "second" file.txt
```
Displays lines containing both "first" and "second" in the file "file.txt".

### Search for Exact Match
```bash
look -x "exact" file.txt
```
Searches for the exact word "exact" in the file "file.txt".

### Locating a Command in Path
```bash
look "ls" $PATH
```
Locates the command "ls" in the system's PATH directories.
:::tip
When using the look command in Linux, keep in mind that it is case-sensitive and only looks for lines that begin with the specified string. Make sure to provide the correct input to get accurate results.
:::

## look FAQ:

### How do I use look in Linux?
To use the look command in Linux, execute the following command:
```bash
look word /usr/share/dict/words
```

### What does the look command do in Linux?
The look command in Linux is used to search for lines that begin with a specific word from a sorted file.

### How can I make the look command perform a case-insensitive search?
To make the look command perform a case-insensitive search, use the -f (ignore case) option. Here's an example:
```bash
look -f word /usr/share/dict/words
```

### How can I display a specific number of lines after a match using look?
To display a specific number of lines after a match while using look, you can pipe the output to the `tail` command. For example:
```bash
look word /usr/share/dict/words | tail -n 5
```

### Can I use regular expressions with the look command in Linux?
No, the look command in Linux does not support regular expressions. It only performs prefix matching on the lines of the input file.

### How can I get the version information of the look command?
To get version information of the look command, you can use the `--version` option. Here's how you can do it:
```bash
look --version
```
## Applications of the look command

- Finding words in a sorted dictionary
- Searching for specific terms in a large text file
- Locating keywords in configuration files
- Identifying patterns in datasets
- Checking for the presence of particular strings in a file