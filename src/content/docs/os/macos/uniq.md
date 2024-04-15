---
title: uniq MacOS command
description: Learn how to use the MacOS uniq command to filter and display unique lines from a file. Easily remove duplicate entries with this essential command.
---

The MacOS uniq command is a handy tool for filtering and displaying unique lines from a file. It helps to remove duplicate entries, making it easier to analyze and work with data. The uniq command works by comparing adjacent lines in a file and removing any duplicates, only displaying single instances of each unique line. By using options like -c to display the count of each unique line or -d to show only the duplicate lines, you can customize the output to suit your needs. Mastering the uniq command can streamline your data processing tasks and improve efficiency in working with files on your MacOS system.

## uniq Syntax:
```bash
uniq [option] [input_file]
```
## uniq Options:

| Option      | Description                            |
|-------------|----------------------------------------|
| -c          | Prefix lines with the number of occurrences |
| -d          | Only output duplicate lines               |
| -u          | Only output unique lines                  |
| -f NUM      | Skip the first NUM fields before checking for uniqueness |
| -s NUM      | Skip the first NUM characters before checking for uniqueness |
| -w NUM      | Compare no more than the first NUM characters/fields |
| -i          | Ignore differences in case when comparing lines |

:::caution
Avoid using uniq command on unsorted input as it only removes adjacent identical lines. For proper functionality, sort the input before using uniq command.
:::

## Parameters:
| Parameter   | Description                            |
|-------------|----------------------------------------|
| [option]    | Specifies the behavior of the command  |
| [input_file]| The file to find and output unique lines from |
## uniq Command Usage Examples:
### Remove Duplicate Lines from a File
```bash
uniq file.txt
```
Removes duplicate adjacent lines from the file.txt and displays the unique lines only.

### Count Consecutive Duplicate Lines
```bash
uniq -c data.txt
```
Counts the number of consecutive occurrences of duplicate lines in the data.txt file.

### Only Display Unique Lines from Two Sorted Files
```bash
uniq file1.txt file2.txt
```
Compares two sorted files (file1.txt and file2.txt) and displays only the unique lines present in each file.

### Ignore Case Sensitivity
```bash
uniq -i data.txt
```
Considers case insensitive comparison for identifying and removing duplicate lines in the data.txt file.

### Display Repeated Lines Only Once
```bash
uniq -u data.txt
```
Displays only lines that are not duplicated within the data.txt file.
:::tip
When using the uniq command in MacOS, keep in mind that it removes duplicate lines from a sorted file. If the file is not sorted, uniq may not eliminate all duplicates as expected. Ensure the file is sorted beforehand or use the sort command in conjunction with uniq for accurate results.
:::

### How do I use uniq in MacOS?
To use the uniq command in bash, execute the following command:
```bash
uniq file.txt
```

### What option can I use with uniq to display the number of occurrences?
To display the number of occurrences of each line with uniq in MacOS, you can use the `-c` option. Here's an example:
```bash
sort file.txt | uniq -c
```

### How can I show only the unique lines from a sorted file?
To display only the unique lines from a sorted file with uniq in MacOS, you can use the `-u` option. Here's how you can do it:
```bash
sort file.txt | uniq -u
```

### Can uniq ignore a certain number of leading fields when comparing lines?
Yes, you can use the `-f` option with uniq in MacOS to ignore a specified number of leading fields when comparing lines. Here's an example:
```bash
sort file.txt | uniq -f 2
```

### How can I check for duplicate lines in an unsorted file with uniq?
To check for duplicate lines in an unsorted file using uniq in MacOS, it is recommended to first sort the file and then use uniq. Here's a command example:
```bash
sort file.txt | uniq -d
```

### Is there a way to ignore a certain number of characters when comparing lines with uniq?
You can use the `-s` option in uniq on MacOS to ignore a specific number of characters when comparing lines. Here's how you can do it:
```bash
sort file.txt | uniq -s 3
```

### How can I display only the duplicated lines in a sorted file with uniq?
To show only the duplicated lines in a sorted file using uniq in MacOS, you can use the `-d` option. Here's an example of how to do it:
```bash
sort file.txt | uniq -d
```
## Applications of the uniq command

- Removing duplicate lines from a file
- Counting the number of occurrences of each unique line in a file
- Identifying and outputting only the unique lines in a file
- Removing adjacent duplicate lines in a file