---
title: cksum command in MacOS
description: Calculate and verify checksums using the cksum command in MacOS. Learn how to use this command for file integrity verification.
---

The MacOS cksum command is used to generate a cyclic redundancy check (CRC) checksum for files. This checksum can be used for verifying the integrity of files and detecting any changes or corruption. The cksum command in MacOS calculates the CRC-32 checksum by default, but it also supports other algorithms like CRC-8 and CRC-16. It is a handy tool for ensuring the integrity of files, especially when transferring or storing them.
## cksum Syntax:
```bash
cksum [options] [file]
```

## MacOS cksum Options:
| Option  | Description                     |
|---------|---------------------------------|
| -o      | Display only the CRC             |
| -h      | Help                            |
| -q      | Quiet mode                      |

## cksum Parameters:
| Parameter | Description                         |
|-----------|-------------------------------------|
| file      | The file to calculate the checksum  |

:::caution
Exercise caution when using the cksum command, as it calculates a checksum value for a file based on its contents. Ensure you have the necessary permissions before running this command.
:::
## How to use cksum command:
### Calculate Checksum for a File
```bash
cksum file.txt
```
Calculates the checksum for the file "file.txt".

### Verify Checksum for a File
```bash
cksum -c checksums.txt
```
Verifies the checksums for the files listed in the "checksums.txt" file.

### Calculate Checksum for Multiple Files
```bash
cksum file1.txt file2.txt file3.txt
```
Calculates the checksum for multiple files at once.

### Output Checksum in CRC Format
```bash
cksum -C file.txt
```
Outputs the checksum in CRC format for the file "file.txt".

### Ignore Line Endings When Calculating Checksum
```bash
cksum -I file.txt
```
Calculates the checksum while ignoring line ending differences for the file "file.txt".

### Display Only the Checksum Value
```bash
cksum -o file.txt
```
Displays only the checksum value for the file "file.txt".

### Calculate Checksum in Portable Format
```bash
cksum -p file.txt
```
Calculates the checksum in portable format for the file "file.txt".

### Display the Checksum in a User-Friendly Format
```bash
cksum -s file.txt
```
Displays the checksum in a user-friendly format for the file "file.txt".
:::tip
When using the cksum command in MacOS, make sure to specify the correct options and file paths to calculate the checksum values accurately.
:::

### How do I use cksum in MacOS?
To use the cksum command in MacOS, execute the following command:
```bash
cksum file.txt
```

### What is the purpose of the cksum command in MacOS?
The cksum command in MacOS is used to calculate a checksum value for a file using a CRC (cyclic redundancy check) algorithm.

### How can I verify the integrity of a file using cksum in MacOS?
You can verify the integrity of a file by comparing its checksum value with a previously generated checksum value using the cksum command.

```bash
cksum -c checksums.txt
```

### How can I generate a list of checksums for multiple files in MacOS?
To generate checksum values for multiple files in MacOS, you can create a checksum file containing the checksum values of each file.

```bash
cksum file1.txt file2.txt > checksums.txt
```

### Can I use cksum to compare checksum values of files in MacOS?
Yes, you can compare the checksum values of files in MacOS using the cksum command with the -c option.

```bash
cksum -c checksums.txt
```

### How do I display only the checksum value without the filename in MacOS?
To display only the checksum value without the filename in MacOS, you can use the -b option with the cksum command.

```bash
cksum -b file.txt
```

### How can I output the checksum value in a specific format in MacOS?
You can output the checksum value in a specific format in MacOS by using the -H option with values 0, 1, or 2 for different formats.

```bash
cksum -H 1 file.txt
```

### Is it possible to generate checksum values for directories in MacOS using cksum?
No, the cksum command in MacOS does not support generating checksum values for directories directly. 


## Applications of the cksum command

- Verifying data integrity
- Checking for corrupted files
- Calculating checksums for file comparisons
- Assessing file changes or modifications