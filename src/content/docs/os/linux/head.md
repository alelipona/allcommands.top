---
title: Linux head command
description: Learn how to use the Linux head command to display the beginning of a file in the terminal. Find syntax, options, and examples for efficient file management.
---

The Linux head command is used to display the beginning of a file in the terminal. It is a simple and useful command for quickly previewing the contents of a file without having to open the entire file. By default, the head command displays the first 10 lines of a file, but you can specify a different number of lines to display. This command is commonly used in conjunction with other commands and tools to process and analyze files efficiently.
## head Syntax:
```bash
head [option] [file]
```
## Options:
| Option | Description |
|--------|-------------|
| -n NUM | Output the first NUM lines of the file |

## Parameters:
| Parameter | Description |
|-----------|-------------|
| file      | The file whose beginning you want to display | 

:::caution
Use the head command carefully as displaying a large number of lines at the beginning of a file can result in a long output.
:::
## head Usage:
### Display the First 10 Lines of a File
```bash
head file.txt
```
This command will display the first 10 lines of the file.txt file.

### Display a Specific Number of Lines from a File
```bash
head -n 5 file.txt
```
Using the -n option, this command will display the first 5 lines of the file.txt file.

### Display Bytes instead of Lines
```bash
head -c 20 file.txt
```
By using the -c option, this command will display the first 20 bytes from the file.txt file.

### Display Multiple Files
```bash
head file1.txt file2.txt
```
This command will display the first 10 lines of both file1.txt and file2.txt.
:::tip
When using the head command in Linux, you can specify the number of lines you want to display from the beginning of a file by using the `-n` option followed by the number of lines you wish to see. If you do not specify the number of lines, by default, head will display the first 10 lines of the file.
:::

### How do I use head in Linux?
To use the head command in Linux, execute the following command:
```bash
head file.txt
```

### What is the purpose of the head command in Linux?
The head command in Linux is used to display the first few lines of a file. It is helpful when you want to quickly peek at the beginning of a file without opening the entire file.

### How can I display a different number of lines using head?
To display a specific number of lines using the head command, you can use the `-n` option followed by the desired number of lines. For example:
```bash
head -n 20 file.txt
```

### How can I display multiple files using head?
You can display the first few lines of multiple files by specifying the file names as arguments to the head command. For example:
```bash
head file1.txt file2.txt
```

### Can I display lines from the end of a file using head?
No, the head command in Linux is specifically designed to display lines from the beginning of a file. If you need to view lines from the end of a file, you can use the tail command.

### How can I display the first line of a file using head?
To display only the first line of a file using the head command, you can specify the `-n 1` option. For example:
```bash
head -n 1 file.txt
```

### How do I display the first few lines of a file along with line numbers?
To display the first few lines of a file along with line numbers, you can use the `-n` option along with the `-v` option. For example:
```bash
head -n 5 -v file.txt
```

## Applications of the head command

- Viewing the first few lines of a file
- Displaying the content of a file starting from the beginning
- Extracting the header of a file
- Previewing contents of log files
- Checking the structure of a CSV file
- Displaying the starting lines of a large file
- Reading and analyzing file contents efficiently