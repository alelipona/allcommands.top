---
title: cut Linux command
description: Learn how to use the powerful Linux cut command to extract specific columns or fields from a file or input stream efficiently.
---

The *cut* command in Linux is a powerful utility used to extract specific columns or fields from a file or input stream. It is particularly useful for data manipulation and extracting specific information based on delimiters or character positions. With various command options available, users can customize the output based on their requirements. *cut* is a versatile tool commonly used in shell scripts, data processing tasks, and text manipulation. It offers a quick and efficient way to extract specific data without the need for complex programming. By understanding the syntax and options of the *cut* command, users can streamline their data extraction processes and improve overall efficiency in handling text data.

## cut Syntax:
```bash
cut [option] [parameter] file
```
## Options:
| Option | Description                              |
|--------|------------------------------------------|
| -c     | Selects specific characters or columns   |
| -d     | Specifies a delimiter for field splitting |
| -f     | Selects specific fields                  |

## Parameters:
| Parameter | Description                              |
|-----------|------------------------------------------|
| file      | The file to process                      |

:::caution
Exercise caution when using the cut command as it directly modifies the output based on the specified options and parameters. Ensure proper understanding of the file structure and content before performing any cuts to avoid data loss.
:::
## cut bash Examples:
### Extract First Field from a Tab-Delimited File
```bash
cut -f1 -d$'\t' file.txt
```
This command extracts the first field from a tab-delimited file named "file.txt".

### Select Columns 2 to 4 from a Comma-Separated File
```bash
cut -d',' -f2-4 file.csv
```
This command selects columns 2 to 4 from a comma-separated file named "file.csv".

### Display Characters 5 to 10 from a Text File
```bash
cut -c5-10 file.txt
```
It displays characters 5 to 10 from each line in a text file named "file.txt".

### Print Specific Fields from a CSV File
```bash
cut -d',' -f1,3,5 file.csv
```
This command prints specific fields (1st, 3rd, and 5th) from a comma-separated file named "file.csv".

### Exclude Fields 2 and 4 from a Space-Delimited File
```bash
cut -d' ' -f1,3,5- file.txt
```
This command excludes fields 2 and 4 while displaying all other fields from a space-delimited file named "file.txt".

### Display Fields 3 to 5 from a Colon-Delimited File
```bash
cut -d':' -f3-5 file.txt
```
It displays fields 3 to 5 from each line in a colon-delimited file named "file.txt".
:::tip
When using the cut command in Linux, remember to specify the appropriate options to extract the desired fields or characters from the input data. You can use options like -f to specify fields based on a delimiter, -c to specify character positions, and more.
:::

### How do I use cut in Linux?
To use the cut command in Linux, execute the following command:
```bash
cut --option <value>
```

### What is the purpose of the cut command in Linux?
The cut command in Linux is used to extract sections from each line of input. It allows you to specify the fields or characters you want to cut based on delimiters or character positions.

### How can I extract specific columns from a CSV file using cut?
To extract specific columns from a CSV file in Linux using cut, you can specify the delimiter (such as comma) and the column number using the -f option. For example:
```bash
cut -d',' -f2,4 input.csv
```

### Can cut command output specific characters from each line of a text file?
Yes, the cut command in Linux can output specific characters from each line of a text file. You can achieve this by using the -c option followed by the character positions. For example:
```bash
cut -c1-5 input.txt
```

### How can I cut based on a custom delimiter in Linux?
To cut based on a custom delimiter in Linux using the cut command, you can specify the delimiter with the -d option followed by the delimiter character. For example:
```bash
cut -d'|' -f3 data.txt
```

### Is it possible to suppress lines without delimiters when using the cut command?
Yes, you can suppress lines without delimiters when using the cut command in Linux by using the -s option. This will suppress lines that do not contain the delimiter specified.
```bash
cut -d',' -f2,4 -s file.txt
```

### How can I cut a range of characters from each line of a text file in Linux?
To cut a range of characters from each line of a text file in Linux using the cut command, you can specify the character positions with the -c option. For example:
```bash
cut -c3-7 input.txt
```

### Can I specify multiple delimiters while using the cut command in Linux?
Yes, you can specify multiple delimiters while using the cut command in Linux by using the -d option with a regex pattern inside single quotes. For example, to cut based on either comma or space as delimiters:
```bash
cut -d'[, ]' -f3 data.txt
```
## Applications of the cut command

- Extracting specific columns from a CSV file
- Selecting specific fields from a text file
- Trimming characters from the beginning or end of each line in a file
- Splitting a line into sections based on a delimiter
- Processing output from other commands by selecting specific parts of the text