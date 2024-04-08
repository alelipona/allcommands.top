---
title: What is stat Linux command?
description: Get file or file system status information with the powerful stat command in Linux.
---

The Linux stat command is used to display detailed file or file system status information. This powerful command provides access to a wide range of data, including file type, permissions, size, access time, modification time, inode number, and much more.

## stat Syntax:
```bash
stat [option] [file]
```
## stat Options:

| Option | Description                                |
|--------|--------------------------------------------|
| -L     | Follow symbolic links                      |
| -c     | Display information in specified format    |
| -f     | Display file system status instead         |
| -t     | Show information in a terse format         |
| -h     | Print help message                         |
| -V     | Print version information                  |

:::caution
Exercise caution when using the stat command, as incorrect usage may lead to unexpected results or errors.
:::

## Parameters:

| Parameter | Description                               |
|-----------|-------------------------------------------|
| file      | Specify the file to retrieve information   |

## stat Command Usage Examples:
### Check File Information
```bash
stat filename.txt
```
Displays detailed information about the file "filename.txt".

### Display File Inode Number
```bash
stat -c %i filename.txt
```
Shows the inode number of the file "filename.txt".

### View File Permissions in Octal Format
```bash
stat -c %a filename.txt
```
Prints the file permissions of "filename.txt" in octal format.

### Show File Birth Time
```bash
stat -c %w filename.txt
```
Retrieves the birth time of the file "filename.txt".

### Get Device ID and Inode in Human-Readable Format
```bash
stat -c "Device: %D Inode: %i" filename.txt
```
Displays the device ID and inode of "filename.txt" in a human-readable format.
:::tip
When using the stat command in Linux, remember to check the available options and customize the output according to your needs. Additionally, combining stat with other commands can provide more detailed information about files and directories.
:::

{Questions}
## Applications of the stat command

- Checking file or directory details
- Retrieving information on file size
- Determining file permissions
- Viewing file timestamps
- Checking information on file type