---
title: SORT Windows Command Guide
description: Learn how to use the Windows sort command to alphabetically sort the contents of a text file. 
---

The Windows sort command is used to alphabetically sort the contents of a text file and display the results in the Command Prompt window. This command is helpful for organizing data in a specific order based on characters or numbers. By default, the sort command arranges the text in ascending order, but you can also specify options to customize the sorting process.

## SORT Syntax:
```cmd
sort [option] [file]
```

## Options:
| Option | Description                                      |
|--------|--------------------------------------------------|
| /?     | Displays help at the command prompt.             |
| /+n    | Skips the first 'n-1' fields before sorting.     |
| /R     | Reverses the sort order (descending).            |

## Parameters:
| Parameter | Description                                |
|-----------|--------------------------------------------|
| file      | Specifies the file to be sorted.           |

:::caution
Exercise caution when using the sort command in Windows. Ensure you specify the correct file to be sorted to avoid unintentionally altering data.
:::
## SORT Command Samples:
### Sort a File Alphabetically
```cmd
sort input.txt
```
This command sorts the lines in the file "input.txt" in alphabetical order.

### Sort a File Numerically
```cmd
sort /n input.txt
```
Sorts the lines in the file "input.txt" numerically.

### Sort File in Reverse Order
```cmd
sort /r input.txt
```
Arranges the lines in the file "input.txt" in reverse order.

### Sort Multiple Files and Display Unique Lines
```cmd
sort /u file1.txt file2.txt
```
Combines and sorts the contents of "file1.txt" and "file2.txt," displaying only unique lines.

### Sort and Output to a New File
```cmd
sort input.txt > sorted_output.txt
```
Sorts the lines in "input.txt" and saves the sorted output to a new file named "sorted_output.txt."

### Case-Insensitive Sorting
```cmd
sort /i input.txt
```
Sorts the content in "input.txt" while ignoring differences in case sensitivity.

### Sort a File with Custom Delimiter
```cmd
sort /t"," /+2 input.csv
```
Sorts the lines in a CSV file "input.csv" using a comma as the delimiter and starting from the third column.
:::tip
When using the sort command in Windows, make sure to specify the correct options or values to achieve the desired sorting behavior. Experiment with different options to get familiar with the command's capabilities.
:::

## SORT FAQ:
### How do I use sort in Windows?
To use the sort command in Windows, execute the following command:
```cmd
sort <filename>
```

### How can I sort a file in reverse order in Windows?
To sort a file in reverse order using the sort command in Windows, you can use the `/r` option. Here's an example:
```cmd
sort /r <filename>
```

### What is the command to sort a file and remove duplicate lines in Windows?
To sort a file and remove duplicate lines using the sort command in Windows, you can use the `/unique` option. Here's an example:
```cmd
sort /unique <filename>
```

### How can I sort a file numerically in Windows?
To sort a file numerically using the sort command in Windows, you can use the `/n` option. Here's an example:
```cmd
sort /n <filename>
```

### How do I ignore leading blanks when sorting in Windows?
To ignore leading blanks when sorting in Windows using the sort command, you can use the `/+<n>` option where `<n>` is the number of characters to ignore. Here's an example:
```cmd
sort /+2 <filename>
```

### Can I sort multiple files at once in Windows using the sort command?
Yes, you can sort multiple files at once in Windows using the sort command by specifying the filenames separated by spaces. Here's an example:
```cmd
sort file1.txt file2.txt
```
## Applications of the SORT Command

- Arrange data in alphabetical order
- Sort data in descending order
- Remove duplicates from a list
- Organize data in numerical order
- Merge and sort multiple files
- Customize sorting criteria with different options