---
title: DISKCOMP Windows command
description: Learn about the DISKCOMP command in Windows, its syntax, parameters, and usage for comparing the contents of two floppy disks on your system.
---

The DISKCOMP command in Windows is used to compare the contents of two floppy disks. It helps users ensure that the files on both disks are identical. By executing the command in the command prompt, users can quickly identify any differences between the two disks. The syntax of the command is straightforward - simply type "DISKCOMP" followed by the drive letter assigned to each floppy disk. Additionally, users can add the "/1" parameter to disallow comparing the disks track by track, increasing the speed of the comparison process. Overall, the DISKCOMP command is a useful tool for users who work with floppy disks and need to verify the integrity of their data.

## DISKCOMP Syntax:
```cmd
diskcomp [drive1:][path1] [drive2:][path2]
```

## Windows DISKCOMP Options:
| Option | Description                            |
|--------|----------------------------------------|
| /1     | Compares only the first 512 bytes      |
| /A     | Forces ASCII comparison                |
| /B     | Forces binary comparison               |
| /C     | Compares case-sensitive                |
| /L     | Compares in ASCII mode by default      |
| /N     | Displays the sector number of any differences |

## DISKCOMP Parameters:
| Parameter | Description            |
|-----------|------------------------|
| drive1    | Specifies the drive letter and colon of the first disk drive                   |
| path1     | Specifies the directory and/or file name of the first disk drive               |
| drive2    | Specifies the drive letter and colon of the second disk drive                  |
| path2     | Specifies the directory and/or file name of the second disk drive              |

:::caution
Caution: The DISKCOMP command is low-level and can result in data loss if used incorrectly. Double-check the paths and drives before executing the command.
:::
## How to use DISKCOMP command:
### Compare two disks
```cmd
diskcomp A: B:
```
Compares two specified disk sectors and shows whether they are identical or different.

### Compare disks with verbose output
```cmd
diskcomp /v A: B:
```
Compares two specific disk sectors and displays additional information about the comparison process, such as the number of bytes transferred.

### Compare disks and ignore size mismatch
```cmd
diskcomp /1 A: B:
```
Compares two disks and ignores the size mismatch error if the disks are different in size.

### Display help information
```cmd
diskcomp /?
```
Shows the help information, which includes details about using the diskcomp command, its parameters, and examples.

### Compare disks and list differences
```cmd
diskcomp /l A: B:
```
Compares two disks and lists the differences found between them.

### Selectively compare directories
```cmd
diskcomp A:\folder1 B:\folder2
```
Allows for selective comparison of folders within the specified disks, providing information on any discrepancies found.

### Compare disks and show progress
```cmd
diskcomp /p A: B:
```
Compares two specified disk sectors and displays a progress indicator to monitor the comparison process.

### Compare disks and force read-only mode
```cmd
diskcomp /r A: B:
```
Forces the comparison of disks in read-only mode, preventing any changes from being written to the disks during the process.
:::tip
When using the diskcomp command in CMD, make sure to double-check the drive letters and paths of the disks you are comparing to avoid any data loss or unexpected results.
:::

### How do I use diskcomp in CMD?
To use the diskcomp command in CMD, execute the following command:
```cmd
diskcomp A: B:
```

### What is the purpose of the diskcomp command in Windows CMD?
The diskcomp command is used to compare the contents of two floppy disks.

### How can I compare the contents of two disks with diskcomp?
To compare the contents of two disks, you can use the diskcomp command followed by the drive letters of the disks. For example:
```cmd
diskcomp A: B:
```

### Can I compare the contents of two folders using diskcomp?
No, the diskcomp command is specifically designed to compare the contents of disks, not folders.

### How do I get a detailed output while using diskcomp?
To get a detailed output while using diskcomp, add the "/1" switch to the command. For example:
```cmd
diskcomp A: B: /1
```

### What is the difference between diskcomp and fc command in CMD?
The diskcomp command is used to compare the contents of disks, while the fc command is used to compare the contents of text files.

### How do I compare the contents of two disks with diskcomp and ignore the number of bytes per sector?
To compare the contents of two disks with diskcomp and ignore the number of bytes per sector, use the "/T" switch in the command. For example:
```cmd
diskcomp A: B: /T
```

### What should I do if diskcomp shows differences between the disks?
If diskcomp shows differences between the disks, you should carefully review the output to understand the discrepancies in the contents of the disks.

### Can I use diskcomp to compare the contents of a USB drive and a floppy disk?
Yes, you can use diskcomp to compare the contents of a USB drive and a floppy disk by specifying their respective drive letters in the command.

## Applications of the DISKCOMP Command

- Comparing the contents of two floppy disks
- Verifying if two floppy disks are identical
- Checking for differences between two disks