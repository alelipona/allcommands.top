---
title: comm Linux Command Guide
description: Discover how to use the Linux comm command to compare sorted files line by line efficiently. Learn about its options and practical examples.
---

The Linux comm command is a powerful tool for comparing sorted files line by line. It can display lines that are unique to each file or common to both. Use comm to easily identify differences and similarities between text files. By default, comm displays three columns: lines unique to the first file, lines unique to the second file, and lines common to both. It also offers options to customize the output and suppress certain columns. Master comm to streamline your file comparison tasks efficiently.
## comm Syntax:
```bash
comm [option]... file1 file2
```
## Options:
| Option | Description              |
|--------|--------------------------|
| -1     | Suppress lines unique to file1  |
| -2     | Suppress lines unique to file2  |
| -3     | Suppress lines that appear in both files |

## Parameters:
| Parameter | Description          |
|-----------|----------------------|
| file1     | The first file to compare  |
| file2     | The second file to compare |

:::caution
Ensure that the files provided as parameters exist and are accessible. Improper usage of options can lead to unexpected results.
:::
## comm Command Samples:
### Compare two sorted files
```bash
comm file1.txt file2.txt
```
Compares the sorted files "file1.txt" and "file2.txt" and displays three columns: lines unique to file1, lines unique to file2, and lines common to both files.

### Suppress the first column
```bash
comm -1 file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" and displays only the lines unique to the second file and lines common to both files, suppressing the first column.

### Suppress the second column
```bash
comm -2 file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" and displays only the lines unique to the first file and lines common to both files, suppressing the second column.

### Suppress the third column
```bash
comm -3 file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" and displays only the lines that are unique to each file, suppressing the third column showing lines common to both files.

### Ignore leading whitespace
```bash
comm -w file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" while ignoring any leading whitespace on each line.

### Output only lines unique to both files
```bash
comm -3 -1 -2 file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" and displays only the lines that are unique to both files, excluding the common lines.

### Suppress all columns
```bash
comm -123 file1.txt file2.txt
```
Compares the files "file1.txt" and "file2.txt" and suppresses all three columns, displaying no output by default.
:::tip
When using the comm command in Linux, remember to ensure that the input files are sorted. This is essential for the command to work correctly and provide accurate results. If the files are not sorted, you can use the `sort` command in conjunction with `comm` to sort them before processing.
:::

## comm FAQ:
### How do I use comm in Linux?
To use the comm command in Linux, execute the following command:
```bash
comm --option <value>
```

### How can I compare two sorted files line by line using comm?
To compare two sorted files line by line in Linux, you can use the comm command as shown below:
```bash
comm file1.txt file2.txt
```

### How do I display lines that are unique to the first file only using comm?
To display lines that are unique to the first file only in Linux using comm, you can run the following command:
```bash
comm -23 file1.txt file2.txt
```

### How can I suppress specific columns in the output when using comm in Linux?
To suppress specific columns in the output of the comm command in Linux, you can use the `-1`, `-2`, or `-3` options as shown below:
```bash
comm -23 file1.txt file2.txt -1
```

### How do I show lines that are common to both files using comm in Linux?
To display lines that are common to both files in Linux using comm, you can use the following command:
```bash
comm -12 file1.txt file2.txt
```

### How can I ignore case sensitivity when comparing lines with comm in Linux?
To ignore case sensitivity when comparing lines using the comm command in Linux, you can utilize the `-i` option as shown below:
```bash
comm -i file1.txt file2.txt
```

## Applications of the comm command

- Comparing two sorted files line by line
- Finding lines that are unique to the first file
- Finding lines that are unique to the second file
- Finding lines that are common in both files