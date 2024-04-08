---
title: comm MacOS command
description: Learn how to use the comm command in MacOS to compare and identify common and unique lines between two sorted files.
---

The `comm` command in MacOS is used to compare two sorted files line by line. It can identify common lines, lines unique to the first file, and lines unique to the second file. By default, `comm` outputs three columns: lines only in the first file, lines only in the second file, and lines common to both files. It provides options to suppress certain columns and customize the output format. `comm` is often used in scripting and data processing tasks to analyze and identify differences between files.

## comm Syntax:
```bash
comm [option] file1 file2
```
## Options:
| Option     | Description                               |
|------------|-------------------------------------------|
| -1         | Suppress the output column of lines unique to file1. |
| -2         | Suppress the output column of lines unique to file2.  |
| -3         | Suppress the output column of lines common to both files. |
| -u         | Suppress the output column of lines that are not common.  |
| -12        | Suppress the lines unique to file1 and common to both files. |
| -23        | Suppress the lines unique to file2 and common to both files. |
| -13        | Suppress the lines common to both files. |
| -i         | Case-insensitive comparison of lines. |

## Parameters:
| Parameter | Description                               |
|-----------|-------------------------------------------|
| file1     | The first file to be compared.            |
| file2     | The second file to be compared.           |

:::caution
Take caution when using the `comm` command as incorrect usage of options and parameters can lead to unexpected results in the output. Ensure that the files provided for comparison exist and are accessible.
:::
## comm bash Examples:
### Compare two sorted files and show lines unique to the first file
```bash
comm -23 file1.txt file2.txt
```
Shows lines that are unique to the file1.txt compared to file2.txt.

### Compare two sorted files and show lines unique to the second file
```bash
comm -13 file1.txt file2.txt
```
Shows lines that are unique to the file2.txt compared to file1.txt.

### Compare two sorted files and show lines common to both files
```bash
comm -12 file1.txt file2.txt
```
Shows lines that are common to both file1.txt and file2.txt.

### Compare two sorted files and suppress common lines
```bash
comm -3 file1.txt file2.txt
```
Suppresses lines that are common to both file1.txt and file2.txt.

### Compare two sorted files and display the number of lines in each file
```bash
comm -12 file1.txt file2.txt | wc -l
```
Displays the number of lines that are common to both file1.txt and file2.txt.

### Compare two sorted files and display the number of unique lines in each file
```bash
comm -23 file1.txt file2.txt | wc -l
```
Displays the number of lines that are unique to file1.txt compared to file2.txt.
:::tip
When using the comm command in MacOS, make sure to carefully read the command options and understand how they affect the output. Additionally, remember that comm expects sorted input, so make sure to sort your input files before using comm to avoid unexpected results.
:::

## comm Command Help Center:
### How do I use comm in MacOS?
To use the comm command in MacOS, execute the following command:
```bash
comm --option <value>
```

### What are the options available with the comm command in MacOS?
To see the available options for the comm command in MacOS, you can refer to the command's manual page by executing:
```bash
man comm
```

### How can I compare two files with comm in MacOS?
To compare two files using comm in MacOS, you can execute a command like the following:
```bash
comm file1.txt file2.txt
```

### Can I suppress certain types of output with comm in MacOS?
Yes, you can suppress specific columns of output with comm in MacOS using options like -1, -2, or -3. For example, to suppress the first column in the output, you can use:
```bash
comm -1 file1.txt file2.txt
```

### How can I show only lines unique to each file with comm in MacOS?
To display only lines that are unique to each input file with comm in MacOS, you can use the -3 option. For example:
```bash
comm -3 file1.txt file2.txt
```

### How do I display lines common to both files with comm in MacOS?
To show lines common to both files while using the comm command in MacOS, you can utilize the -1, -2, and -3 options. For example, to display only common lines, you can use:
```bash
comm -12 file1.txt file2.txt
```

### Can I change the delimiter used by comm in MacOS?
Yes, you can change the delimiter used by the comm command in MacOS by setting the environment variable LC_CTYPE. For example, to use a different delimiter:
```bash
LC_CTYPE=C comm -12 file1.txt file2.txt
```
## Applications of the comm command

1. Finding common lines in two sorted files
2. Identifying lines unique to the first sorted file
3. Identifying lines unique to the second sorted file