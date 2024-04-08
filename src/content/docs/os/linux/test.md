---
title: What is test Linux command?
description: Check the validity of files and expressions in Linux with the test command.
---

The Linux test command is used to check conditions and return a successful or failed exit status. It is commonly used in shell scripts to test file attributes and perform string comparisons.
## test Syntax:
```bash
test [option] [file...]
```
## test Options:

| Option       | Description           |
|--------------|-----------------------|
| -f           | Check if the file is an ordinary file      |
| -d           | Check if the file is a directory           |
| -r           | Check if the file is readable              |
| -w           | Check if the file is writable              |
| -x           | Check if the file is executable            |

:::caution
Exercise caution while using the test command. Ensure that you have the necessary permissions to perform the tests on the specified files.
:::

## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| file      | The file to be tested       |
## test Command Usage Examples:

### Check if a File Exists
```bash
test -e file.txt && echo "file.txt exists" || echo "file.txt does not exist"
```
This command checks if the file "file.txt" exists in the current directory and prints a message based on the result.

### Check if a Directory is Empty
```bash
test -z "$(ls -A /path/to/directory)" && echo "Directory is empty" || echo "Directory is not empty"
```
Tests whether the directory "/path/to/directory" is empty or not by checking if the output of `ls -A` is empty.

### Verify File Read Permission
```bash
test -r file.txt && echo "file.txt is readable" || echo "file.txt is not readable"
```
Checks if the file "file.txt" has read permission and displays a message accordingly.

### Compare Numerical Values
```bash
test 5 -eq 5 && echo "5 equals 5" || echo "5 does not equal 5"
```
Compares two numerical values using the test command and prints a message based on the comparison result.

### Check String Equality
```bash
test "hello" = "world" && echo "Strings are equal" || echo "Strings are not equal"
```
Tests whether the strings "hello" and "world" are equal and outputs the result message.
:::tip
When using the `test` command in Linux, make sure to include the appropriate operators and operands to perform the desired comparisons. Additionally, remember that the `test` command is often used in conjunction with conditional statements in shell scripts to control the flow of the script.
:::

### How do I check if a file exists in a directory in Linux?
To check if a file exists in a directory using the test command, you can use the following syntax:
```bash
test -f /path/to/file
```

### How can I verify if a string is empty in a bash script?
To verify if a string is empty in a bash script with the test command, you can use the following example:
```bash
[ -z "$mystring" ]
```

### How do I compare two strings in a shell script using test?
To compare two strings in a shell script using the test command, you can use the following syntax:
```bash
[ "$string1" = "$string2" ]
```

### How can I check if a number is greater than another in Linux?
To check if a number is greater than another in Linux using the test command, you can use the following example:
```bash
[ 5 -gt 3 ]
```

### How do I check if a directory is empty in Linux?
To check if a directory is empty in Linux with the test command, you can use the following syntax:
```bash
[ -z "$(ls -A /path/to/directory)" ]
```

### How can I test if a file is writable in a shell script?
To test if a file is writable in a shell script using the test command, you can use the following example:
```bash
[ -w /path/to/file ]
```

### How do I check if a variable is set in a bash script?
To check if a variable is set in a bash script with the test command, you can use the following syntax:
```bash
[ -n "$myvariable" ]
```

### How can I determine if a file is executable in Linux?
To determine if a file is executable in Linux using the test command, you can use the following example:
```bash
[ -x /path/to/file ]
```

## Applications of the test command

- Checking if a file exists
- Checking if a file is readable
- Checking if a file is writable
- Checking if a file is executable
- Comparing strings
- Comparing integers
- Checking if a variable is set or not
- Checking if two files are the same
- Checking if two files are different
- Checking file types
- Combining multiple test conditions in a single statement