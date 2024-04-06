---
title: What is COMP Windows command?
description: Compare files using the COMP command in Windows. Learn how to use this command for file comparison efficiently.
---

The COMP command in Windows is a command-line tool used to compare the contents of two files byte by byte. It is mainly used to check if two files are identical or different. By running the COMP command followed by the paths of the two files, users can quickly determine whether the files are the same or not. This command is beneficial for verifying the integrity of file copies, backups, or downloads. The COMP command displays the offset and line number of the first mismatch found in the files, making it easier for users to pinpoint the differences. It is a handy tool for ensuring data accuracy and consistency in various file management tasks.

## COMP Syntax:
```cmd
comp [Options] File1 File2
```
## COMP Options:
| Option | Description                      |
|--------|----------------------------------|
| /a     | Displays the contents as ASCII    |
| /b     | Compares files as binary          |
| /c     | Disregards case of the letters    |
| /d     | Displays differences               |
  
:::caution
Do not use the COMP command with the /b option for comparing non-text files as it will produce incorrect results.
:::

## Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| File1     | Specifies the first file to compare |
| File2     | Specifies the second file to compare|
### Compare Two Files
```cmd
comp file1.txt file2.txt
```
Compares the contents of two text files, “file1.txt” and “file2.txt”.

### Compare Two Directories
```cmd
comp /s directory1 directory2
```
Recursively compares the contents of two directories, “directory1” and “directory2”.

### Ignore Case Differences
```cmd
comp /i file1.txt file2.txt
```
Compares two text files, “file1.txt” and “file2.txt”, ignoring case differences.

### Display Differences Side by Side
```cmd
comp /l file1.txt file2.txt
```
Compares two text files, “file1.txt” and “file2.txt”, and displays the differences side by side.

### Compare Binary Files
```cmd
comp /b file1.dat file2.dat
```
Compares two binary files, “file1.dat” and “file2.dat”, to check for differences in content. 

## COMP Command Usage Examples:
### Compare Two Files
```cmd
comp file1.txt file2.txt
```
Compares the contents of two text files, “file1.txt” and “file2.txt”.

### Compare Two Directories
```cmd
comp /s directory1 directory2
```
Recursively compares the contents of two directories, “directory1” and “directory2”.

### Ignore Case Differences
```cmd
comp /i file1.txt file2.txt
```
Compares two text files, “file1.txt” and “file2.txt”, ignoring case differences.

### Display Differences Side by Side
```cmd
comp /l file1.txt file2.txt
```
Compares two text files, “file1.txt” and “file2.txt”, and displays the differences side by side.

### Compare Binary Files
```cmd
comp /b file1.dat file2.dat
```
Compares two binary files, “file1.dat” and “file2.dat”, to check for differences in content. 

:::tip
When using the COMP command in CMD, make sure to carefully review the options and values you provide to avoid any unintended data comparisons or inaccuracies.
:::

### How do I use comp in CMD?
To use the comp command in CMD, execute the following command:
```cmd
comp C:\file1.txt D:\file2.txt
```

### What does the COMP command do in CMD?
The COMP command in CMD is used to compare the contents of two files to check if they are the same or different. 

### How to show differences when using the COMP command in CMD?
To display the differences found when using the COMP command in CMD, add the /D switch to the command:
```cmd
comp /D C:\file1.txt D:\file2.txt
```

### How to make the COMP command case-insensitive in CMD?
To make the COMP command case-insensitive when comparing files in CMD, use the /C switch:
```cmd
comp /C C:\file1.txt D:\file2.txt
```

### How to use the COMP command to compare binary files in CMD?
To compare binary files using the COMP command in CMD, include the /B switch in the command:
```cmd
comp /B C:\binary1.bin D:\binary2.bin
```

### How to ignore whitespaces when using the COMP command in CMD?
To disregard whitespaces while comparing files with the COMP command in CMD, add the /W switch:
```cmd
comp /W C:\file1.txt D:\file2.txt
```

### What is the output of the COMP command when files are the same?
When the files are identical, the COMP command in CMD will display the following message:
```
Comparing files file1.txt and file2.txt
Files compare OK
```

### How to compare directories using the COMP command in CMD?
To compare directories with the COMP command in CMD, use the /A switch:
```cmd
comp /A C:\directory1\ D:\directory2\
```
## Applications of the COMP Command

- Comparing two files to check if they are the same or different by content.
- Verifying if two files are identical.
- Checking for changes or discrepancies between two files.
- Useful for confirming file integrity during transfers or backups.