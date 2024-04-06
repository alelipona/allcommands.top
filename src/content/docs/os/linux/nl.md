---
title: nl Linux Command Guide
description: Learn how to use the Linux nl command for numbering lines in a file. Find syntax, options, and examples in this comprehensive guide.
---

The Linux nl command is used to number lines in a file. It is a simple yet powerful tool that can be used to add line numbers to a file for better organization. The nl command offers various options to customize the numbering format and location. By using the nl command, you can quickly and easily add line numbers to your files, making it easier to reference specific lines of text. This guide will walk you through the syntax of the nl command, various options available, and practical examples to help you master the use of nl in Linux.

## nl Syntax:
```bash
nl [option] [file]
```
## Options:
| Option | Description                           |
|--------|---------------------------------------|
| -b     | Specify how body lines should be numbered |
| -d     | Specify the delimiter                 |
| -f     | Specify the number of leading blank lines to be skipped |
| -h     | Display usage message and exit        |
| -i     | Specify line number increment          |
| -l     | Specify the number of lines to be counted before incrementing line numbers |
| -n     | Specify number format for line numbers |
| -s     | Specify the line number separator      |
| -v     | Specify a number to add to line numbers |
| -w     | Specify the number of digits to use for line numbers |

## Parameters:
| Parameter | Description                        |
|-----------|------------------------------------|
| file      | The file to be numbered            |

:::caution
Exercise caution while using the nl command as incorrect usage may result in unexpected numbering of lines in the file.
:::
## nl Command Samples:
### Numbering Lines in a File
```bash
nl file.txt
```
This command numbers all lines in the file "file.txt".

### Specify Starting Line Number
```bash
nl -v 100 file.txt
```
Numbers all lines in the file "file.txt" starting from line number 100.

### Add Line Numbers with Tab Separation
```bash
nl -s $'\t' file.txt
```
Numbers all lines in the file "file.txt" with tab (\t) as the separator.

### Display Line Numbers for Non-Empty Lines Only
```bash
nl -b t file.txt
```
Displays line numbers for non-empty lines in the file "file.txt".

### Numbering Lines and Indicating for Empty Lines
```bash
nl -ba file.txt
```
Numbers all lines in the file "file.txt" and includes line numbers for empty lines as well.

### Add Specific Line Numbers Format
```bash
nl -n rz file.txt
```
Numbers all lines in the file "file.txt" with a special custom format for line numbers.

### Insert Page Headers with Line Numbers
```bash
nl -h "HEADER" -body -f 1 file.txt
```
Inserts page headers with line numbers in the file "file.txt".
:::tip
When using the nl command in Linux, remember to check the available options and understand how they affect the output of line numbering. Experimenting with different options can help you customize the line numbering to suit your specific needs.
:::

## nl FAQ:
### How do I use nl in Linux?
To use the nl command in Linux, execute the following command:
```bash
nl --option <value>
```

### What is the purpose of the nl command?
The `nl` command is used to add line numbers to a file or standard input. It is helpful for referencing specific lines in a document or for generating formatted output with line numbers.

### How can I number only non-empty lines with nl?
To number only non-empty lines in a file using nl, you can use the `-ba` or `--body-numbering=a` option. This will number only the non-empty lines of the file. Here is an example:
```bash
nl -ba file.txt
```

### Can nl be used to number lines in reverse?
Yes, you can use the `-nr` or `--number-format=r` option with nl to number lines in reverse. This will start numbering from the last line. Here is an example:
```bash
nl -nr file.txt
```

### How can I customize the format of line numbers with nl?
To customize the format of line numbers with nl, you can use the `-w` or `--number-width` option followed by a number to specify the width of the line number field. Here is an example:
```bash
nl -w 3 file.txt
```

### Is it possible to add a prefix to line numbers with nl?
Yes, you can add a prefix to line numbers with the `-p` or `--number-format` option followed by the desired prefix. This will prepend the specified prefix to the line numbers. Here is an example:
```bash
nl -p '@ ' file.txt
```

## Applications of the nl command

- Numbering lines in a file
- Adding line numbers to a file
- Creating or updating a table of contents 
- Numbering output of a command or script
- Formatting text files with line numbers