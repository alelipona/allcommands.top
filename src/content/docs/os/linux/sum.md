---
title: What is sum Linux command?
description: Calculate checksum and block counts of a file with the Linux sum command. Learn about its usage and options.
---

The Linux sum command calculates and prints the checksum and block counts of a file. It can be used to verify the integrity of files and detect any changes or corruption.
## sum Syntax:
```bash
sum [OPTION]... [FILE]...
```

## sum Options:
| Option   | Description                       |
|----------|-----------------------------------|
| -s       | Print only the sum of data       |
| -r       | Print in reverse order           |
| -0       | End each output line with ASCII NUL |

:::caution
Avoid using the sum command for critical operations as it is mainly used for checking data integrity rather than general purpose file manipulation.
:::

## Parameters:
| Parameter | Description                            |
|-----------|----------------------------------------|
| FILE      | Specify the paths to the files to sum  |
## sum Command Usage Examples:
### Check the Checksum of a File
```bash
sum file.txt
```
Calculates and displays the checksum of the file "file.txt".

### Verify Multiple Files Checksum 
```bash
sum file1.txt file2.txt file3.txt
```
Calculates and displays the checksum of multiple files "file1.txt", "file2.txt", and "file3.txt".

### Compare Checksums between Two Files
```bash
sum file1.txt file2.txt
```
Calculates and displays the checksums of "file1.txt" and "file2.txt" for comparison.

### Redirect Sum Output to a File
```bash
sum file.txt > checksum.txt
```
Calculates and saves the checksum of "file.txt" in a separate file named "checksum.txt".

### Display Checksum in Binary/Hexadecimal Form
```bash
sum -r file.txt
```
Calculates and displays the checksum of "file.txt" in binary and hexadecimal form.
:::tip
When using the sum command in Linux, remember that it is commonly used to calculate checksums and check if files are identical. It is helpful for verifying file integrity and security.
:::

### How do I use sum in Linux?
To use the sum command in bash, execute the following command:
```bash
sum file.txt
```

### How can I output the checksum in a specific format with sum?
To output the checksum in a specific format, use the following command:
```bash
sum --format=null file.txt
```

### How can I display the help information for sum command?
To display the help information for the sum command, use the following command:
```bash
sum --help
```

### How do I verify the integrity of a file using sum?
To verify the integrity of a file using sum, execute the following command:
```bash
sum -c checksum.txt
```

### How to calculate the checksum of multiple files with sum?
To calculate the checksum of multiple files, use the following command:
```bash
sum file1.txt file2.txt
```

### Can I ignore warnings when using sum in Linux?
To ignore warnings when using sum, you can use the `-w` flag in the command. For example:
```bash
sum -w file.txt
```

### How to specify a different hashing algorithm with sum?
To specify a different hashing algorithm, use the `-a` option in the command. For example, to use SHA256, run:
```bash
sum -a SHA256 file.txt
```

### Is there a way to only display the checksum without the filename using sum?
To display only the checksum without the filename, use the `-t` option in the command. For example:
```bash
sum -t file.txt
```
## Applications of the sum command

- Checking for changes in files
- Verifying data integrity