---
title: uniq Linux command
description: Learn how to use the uniq command in Linux to filter out duplicate lines from a file. Perfect for streamlining data and improving readability.
---

The `uniq` command in Linux is used to filter out duplicate lines from a file. It is often used in conjunction with other commands in a pipeline to streamline data and improve readability. By default, `uniq` compares adjacent lines in a file and removes any duplicates it finds. It also has options to ignore case, show only duplicates, or display the count of duplicate lines. `uniq` is a versatile tool for data manipulation and organization in the command line.

## uniq Syntax:
```bash
uniq [option] [input_file]
```
## Options:
| Option | Description                     |
|--------|---------------------------------|
| -c     | Precede lines by the number of occurrences |
| -d     | Only print duplicate lines            |
| -u     | Only print unique lines               |
| -f N   | Skip the first N fields before checking for uniqueness |
| -i     | Ignore differences in case when comparing lines |
| -s N   | Skip the first N characters of each line before checking for uniqueness |

## Parameters:
| Parameter   | Description                                    |
|-------------|------------------------------------------------|
| input_file  | The file to check for duplicate or unique lines |

:::caution
Be cautious when using the uniq command without any options as it removes duplicate adjacent lines. Make sure the input file is sorted beforehand if you intend to check for duplicate lines in the entire file.
:::
## uniq bash Examples:
### Remove Consecutive Duplicate Lines from a File
```bash
uniq file.txt
```
Removes consecutive duplicate lines from a file and displays the unique lines.

### Keep Only One Instance of Consecutive Duplicate Lines
```bash
uniq -d file.txt
```
Displays only the duplicate lines that are repeated consecutively in the file.

### Count the Number of Occurrences of Each Line
```bash
sort file.txt | uniq -c
```
Sorts the file beforehand and counts the number of occurrences of each unique line.

### Ignore Case Sensitivity when Comparing Lines
```bash
uniq -i file.txt
```
Performs the comparison of lines without considering the case sensitivity.

### Display Only Unique Lines and Number of Occurrences
```bash
sort file.txt | uniq -c -u
```
Sorts the file first, displays only the unique lines, and includes the number of occurrences for each unique line.

### Suppress Repeated Lines Based on a Specific Number of Characters
```bash
uniq -w 10 file.txt
```
Suppresses (or removes) repeated lines based on the first 10 characters of each line.
:::tip
When using the uniq command in Linux, remember that it removes adjacent duplicate lines. Make sure your input is sorted if you want to remove all duplicates in a file.
:::

### How do I use uniq in Linux?
To use the uniq command in Linux, execute the following command:
```bash
uniq file.txt
```

### What is the purpose of uniq in Linux?
The uniq command in Linux is used to filter out adjacent duplicate lines in a file.

### How can I count the number of occurrences of each line with uniq?
To count the number of occurrences of each line in a sorted file, use the -c option with uniq:
```bash
uniq -c sorted_file.txt
```

### How can I display only the duplicated lines with uniq?
You can display only the duplicated lines in a sorted file by using the -d option with uniq:
```bash
uniq -d sorted_file.txt
```

### How can I ignore the case sensitivity of lines with uniq?
To ignore the case sensitivity of lines while using uniq, you can use the -i option:
```bash
uniq -i file.txt
```

### How can I display only the unique lines with uniq?
You can display only the unique lines in a sorted file by using the -u option with uniq:
```bash
uniq -u sorted_file.txt
```

### How to skip a specific number of initial fields while comparing the lines?
To skip a specific number of initial fields while comparing the lines, use the -f option followed by the number of fields to skip with uniq:
```bash
uniq -f 2 file.txt
```

### How can I display only the non-unique lines with uniq?
You can display only the non-unique lines in a sorted file by using the -D option with uniq:
```bash
uniq -D sorted_file.txt
```
## Applications of the uniq command

1. Remove duplicate lines from a file
2. Count and display the number of occurrences of each line in a file
3. Filter out adjacent matching lines
4. Display only lines that are unique within a sorted file