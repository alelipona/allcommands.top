---
title: What is egrep Linux command?
description: Learn how to use the egrep command in Linux to search for patterns within files efficiently.
---

`egrep` is a powerful Linux command used to search for specific patterns within files. It is an extension of the `grep` command with support for extended regular expressions. `egrep` offers advanced pattern matching capabilities, making it a versatile tool for users looking to find specific text within files quickly and efficiently.

## egrep Syntax:
```bash
egrep [options] pattern file
```
## egrep Options:
| Option         | Description                           |
|----------------|---------------------------------------|
| -i             | Ignore case sensitivity                |
| -v             | Invert the match (exclude pattern)     |
| -w             | Match whole words                     |
| -E             | Interpret pattern as an extended regular expression |
| -F             | Interpret pattern as fixed strings (no regex) |
| -c             | Count the number of matching lines    |
| -o             | Print only the matching part of the lines |
| -n             | Show line numbers along with the output |
| -f file        | Read patterns from a file            |
| -r             | Recursively search subdirectories     |

:::caution
Exercise caution while using the egrep command as incorrect usage can lead to unexpected results or errors.
:::

## Parameters:
| Parameter      | Description                           |
|----------------|---------------------------------------|
| pattern        | The pattern to search for in the file |
| file           | The file(s) to search the pattern in  |
## egrep Command Usage Examples:

### Search for a Specific Word in a File
```bash
egrep 'word' file.txt
```
Searches for the word "word" in the file named "file.txt" and displays the matching lines.

### Search for Lines Starting with a Specific Pattern
```bash
egrep '^pattern' file.txt
```
Displays lines from the file "file.txt" that start with the specified pattern.

### Search for Lines Ending with a Specific Pattern
```bash
egrep 'pattern$' file.txt
```
Displays lines from the file "file.txt" that end with the specified pattern.

### Search for Lines Containing Either of Two Patterns
```bash
egrep 'pattern1|pattern2' file.txt
```
Displays lines from the file "file.txt" that contain either "pattern1" or "pattern2".

### Search for Lines Matching a Regular Expression
```bash
egrep '^[0-9]+$' file.txt
```
Displays lines from the file "file.txt" where the entire line consists of one or more digits.
:::tip
When using the egrep command in Linux, it is important to understand the regular expressions that can be used for pattern matching. Regular expressions allow for flexible and powerful pattern matching, so familiarize yourself with the syntax to make the most out of egrep.
:::

{Questions}
## Applications of the egrep command

1. Searching for a specific pattern in files
2. Filtering output based on regular expressions
3. Extracting specific information from text
4. Validating input based on patterns
5. Comparing text against a pattern