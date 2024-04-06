---
title: What is FC Windows command?
description: Compare files using the Windows fc command, a built-in tool to find the differences between two text files quickly and efficiently.
---

The Windows fc command is a built-in tool that allows users to compare two files and display the differences between them. It is a fast and efficient way to check for changes in text files and identify discrepancies.

## FC Syntax:
```cmd
fc [option] [file1] [file2]
```

## FC Options:
| Option | Description                            |
|--------|----------------------------------------|
| /B     | Performs a binary comparison            |
| /C     | Ignores case-sensitive differences      |
| /L     | Compares files as ASCII text           |
| /LB    | Compares files as binary text          |
| /N     | Displays line numbers with differences  |
| /T     | Does not expand tabs to spaces         |
| /U     | Compares files as UNICODE text         |
| /W     | Compresses white space (tabs and spaces)|

## Parameters:
| Parameter | Description                 |
|-----------|-----------------------------|
| file1     | Specifies the first file to compare  |
| file2     | Specifies the second file to compare |

:::caution
Exercise caution while using the fc command as it directly compares the content of files and can potentially overwrite data if not used carefully.
:::
## FC Command Usage Examples:
### Compare two text files
```cmd
fc file1.txt file2.txt
```
This command compares the contents of two text files and displays the differences between them.

### Compare two directories
```cmd
fc /B /C /L /T /W dir1 dir2
```
Compares the files in two directories - dir1 and dir2 - and displays the differences in binary mode (/B), case-insensitive comparison (/C), show line numbers (/L), no column delimiters (/T), and full-width output (/W).

### Ignore the white spaces
```cmd
fc /B /C /L /T /W /A dir1 dir2
```
Compares two directories while ignoring the white spaces and displays the differences with the specified options.

### Compare two files and output to a new file
```cmd
fc file1.txt file2.txt > differences.txt
```
Compares file1.txt and file2.txt, then saves the differences in a new file named differences.txt.

### Compare files recursively
```cmd
fc /R dir1 dir2
```
Compares files in two directories recursively (including subdirectories) and displays the differences.
:::tip
When using the fc command in Windows CMD, make sure to carefully review the options available and understand how they affect the output comparison between the files. Additionally, consider using the /l option for performing a case-insensitive comparison if needed.
:::

### How do I use fc in Windows?
To use the fc command in CMD, execute the following command:
```cmd
fc /l file1.txt file2.txt
```

### What is the purpose of the fc command in Windows?
The fc command in Windows is used to compare two files or sets of files and display the differences between them.

### How can I ignore the case sensitivity when using fc in Windows?
You can ignore case sensitivity when using the fc command in Windows by including the /l option in your command. For example:
```cmd
fc /l file1.txt file2.txt
```

### Can I use fc command to compare binary files in Windows CMD?
Yes, the fc command can be used to compare binary files in Windows CMD. You can compare two binary files by executing a command similar to the following:
```cmd
fc /b binaryfile1.bin binaryfile2.bin
```

### How do I display line numbers while using the fc command in Windows?
To display line numbers while using the fc command in Windows, you can include the /n option in your command. Here's an example:
```cmd
fc /n file1.txt file2.txt
```

### Is it possible to save the result of the fc command to a file in Windows CMD?
Yes, you can save the result of the fc command to a file in Windows CMD by redirecting the output using the ">" operator. For example:
```cmd
fc file1.txt file2.txt > comparison_result.txt
```

### How can I view side by side differences with the fc command in Windows?
To view side by side differences when using the fc command in Windows, you can include the /t option in your command. Here's an example:
```cmd
fc /t file1.txt file2.txt
```
## Applications of the FC Command
- Compares two individual files and displays the differences between them
- Can be used to compare the contents of any text files
- Useful for checking for differences between two versions of a file